---
layout: layouts/post.webc
title: 'Entendiendo los servidores MCP: enfoques genéricos vs. específicos de dominio'
date: '2025-05-16'
permalink: '/es/entendiendo-los-servidores-mcp/'
tags: ['posts']
locale: 'es'
---

### Introducción: Los servidores MCP como API para los LLM

<img class="img-right img-250px" src="/img/posts/mcp-architecture.jpg" alt="Arquitectura MCP"></img>

Los servidores MCP (Model Context Protocol) son para los grandes modelos de lenguaje (LLM) lo que las API REST son para las aplicaciones: formas estructuradas y estandarizadas de interactuar con fuentes de datos y herramientas externas. Al igual que las API, los servidores MCP varían significativamente en su diseño, desde soluciones muy genéricas y flexibles hasta soluciones especializadas y específicas de un dominio.

En esta publicación, profundizaremos en estos dos enfoques —genérico versus específico de dominio— y explicaremos cómo un diseño bien pensado de servidores MCP puede mejorar drásticamente la usabilidad y la eficiencia de las aplicaciones impulsadas por LLM.

> A lo largo de esta publicación, haremos referencia al [conjunto de datos RAGmonsters](https://github.com/LostInBrittany/RAGmonsters), una base de datos curada que contiene información detallada sobre diversas criaturas ficticias, sus características, fortalezas y debilidades. Este ejemplo ayudará a ilustrar escenarios prácticos de manera clara y a hacer analogías intuitivas al discutir diferentes diseños de servidores MCP.

---

### Las API REST: una analogía útil

Considere las API REST tradicionales:

*   Las **API REST genéricas** podrían tener un único punto de conexión `POST /query` para la ejecución de SQL sin procesar. Flexible, sí, pero engorroso para los clientes que deben comprender completamente el funcionamiento interno de la base de datos.
*   Las **API REST adaptadas al dominio** proporcionan puntos de conexión como `GET /monsters/{id}` o `GET /monsters?type=dragon`, lo que hace que las interacciones sean intuitivas y directas.

Del mismo modo, los servidores MCP pueden elegir su nivel de abstracción según su caso de uso, equilibrando la facilidad de uso con la flexibilidad y la complejidad de la implementación.

---

### Servidores MCP genéricos: un punto de partida flexible

Un servidor MCP genérico tiene como objetivo ser universalmente aplicable, ofreciendo la máxima flexibilidad para interactuar con diferentes bases de datos o herramientas sin un conocimiento previo de sus esquemas o lógica interna.

#### Ejemplo: Servidor MCP de PostgreSQL con una única herramienta de consulta

Considere [@modelcontextprotocol/server-postgres](https://github.com/modelcontextprotocol/servers/tree/main/src/postgres), un servidor MCP que proporciona un único punto de conexión, como `POST /query`, que acepta consultas SQL sin procesar y devuelve los resultados de la base de datos. Este enfoque impone restricciones mínimas sobre el tipo de consultas que el cliente (en este caso, el LLM) puede ejecutar.

#### Ventajas

* ✅ **Simplicidad**: Fácil y rápido de implementar sin mucha configuración.
* ✅ **Universalidad**: Compatible con prácticamente cualquier base de datos PostgreSQL.

#### Desventajas

* ❌ **Alta carga cognitiva**: El LLM debe comprender esquemas de bases de datos complejos antes de poder realizar consultas de manera efectiva.
* ❌ **Ineficiencia**: Generalmente requiere múltiples consultas preliminares para comprender completamente el esquema, lo que resulta en una mayor latencia y una menor eficiencia.
* ❌ **Preocupaciones de seguridad**: Aceptar SQL sin procesar aumenta la vulnerabilidad a la inyección de SQL si las entradas no se manejan adecuadamente.

Si desea ver un ejemplo de un servidor MCP genérico en acción, puede consultar el [ejemplo de servidor MCP de PostgreSQL con chat LLM en Clever Cloud](https://github.com/CleverCloud/mcp-pg-example), implementarlo usted mismo, conectarlo a su LLM preferido y experimentar con él de primera mano.

![Ejemplo de servidor MCP de PostgreSQL con chat LLM en Clever Cloud](/img/posts/2025-05-12-mcp-from-generic-to-domain-specific-01.png)

---

### Servidores MCP específicos de dominio: una alternativa a medida y eficiente

Los servidores MCP específicos de dominio ofrecen herramientas y puntos de conexión especializados y adaptados al dominio exacto de la base de datos o aplicación a la que sirven, lo que simplifica enormemente la tarea del LLM.

#### Ejemplo: Servidor MCP de PostgreSQL personalizado para RAGmonsters

El servidor MCP de RAGmonsters está diseñado específicamente para manejar una base de datos que contiene información detallada sobre diversas criaturas, incluidos sus tipos, debilidades y fortalezas. En lugar de un punto de conexión de consulta general, este servidor MCP ofrece herramientas centradas en el dominio como:

*   `getMonsterByName`
*   `listMonstersByType`

Este enfoque abstrae la estructura de la base de datos subyacente, lo que permite al LLM realizar solicitudes específicas de alto nivel sin necesidad de comprender los esquemas de las tablas o escribir SQL.

#### Ventajas

* ✅ **Carga cognitiva reducida**: El LLM interactúa a través de herramientas intuitivas y semánticas.
* ✅ **Optimización del rendimiento**: Cada herramienta se puede optimizar para obtener velocidad y eficiencia.
* ✅ **Seguridad mejorada**: No hay exposición directa a SQL para el LLM, lo que reduce el riesgo de ataques de inyección.

#### Inconvenientes

* ❌ **Sobrecarga de desarrollo inicial**: Se requiere más planificación y diseño iniciales.
* ❌ **Flexibilidad reducida**: Los cambios significativos en el esquema requieren actualizaciones en el servidor MCP.

Si desea ver un ejemplo de un servidor MCP específico de dominio en acción, puede explorar el [servidor MCP de PostgreSQL personalizado para RAGmonsters](https://github.com/LostInBrittany/RAGmonsters-mcp-pg). Siga las instrucciones para implementarlo en Clever Cloud y probarlo usted mismo.

![Servidor MCP de PostgreSQL personalizado para RAGmonsters](/img/posts/2025-05-12-mcp-from-generic-to-domain-specific-02.png)

---

### Cuándo elegir entre genérico y específico de dominio

La elección entre servidores MCP genéricos y específicos de dominio depende de varios factores:

| Factor                         | Servidor MCP genérico               | Servidor MCP específico de dominio         |
| ------------------------------ | ----------------------------------- | ------------------------------------------ |
| **Velocidad de desarrollo**    | Configuración inicial rápida        | Requiere planificación y configuración iniciales |
| **Rendimiento y eficiencia**   | Menos eficiente, se necesitan más consultas | Optimizado, se necesitan menos consultas   |
| **Seguridad**                  | Más vulnerable debido al SQL sin procesar | Más seguro, sin exposición directa a SQL   |
| **Flexibilidad y adaptabilidad** | Altamente adaptable a los cambios de esquema | Requiere modificaciones con los cambios de esquema |
| **Usabilidad para usuarios finales** | Complejo, alta carga cognitiva      | Herramientas simples e intuitivas          |

#### Preguntas clave para guiar su decisión:

*   **¿Quiénes son los usuarios principales?**

    *   ¿Desarrolladores que exploran datos o usuarios finales que buscan respuestas directas?
*   **¿Cuál es la complejidad de su esquema de base de datos?**

    *   Un esquema complejo se beneficia significativamente de la abstracción específica del dominio.
*   **¿Qué tan críticos son el rendimiento y la seguridad?**

    *   Los servidores específicos de dominio ofrecen claras ventajas aquí.

---

### Conclusión: Elegir el nivel de abstracción adecuado

Comprender las necesidades específicas de su proyecto lo guiará hacia la elección correcta, asegurando interacciones óptimas para sus aplicaciones impulsadas por LLM.

¿Quiere explorar más? Consulte nuestros ejemplos, el [ejemplo de servidor MCP de PostgreSQL con chat LLM en Clever Cloud](https://github.com/CleverCloud/mcp-pg-example) y el [servidor MCP de PostgreSQL personalizado para RAGmonsters en GitHub](https://github.com/LostInBrittany/RAGmonsters-mcp-pg).
