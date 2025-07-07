---
layout: layouts/post.webc
title: 'Comprendre les serveurs MCP : approches génériques ou spécifiques au domaine'
date: '2025-05-16'
permalink: '/fr/comprendre-les-serveurs-mcp/'
tags: ['posts']
locale: 'fr'
canonical_url: 'https://www.clever-cloud.com/fr/blog/entreprise/2025/05/16/serveurs-mcp-generiques-serveurs-specifiques-construire-des-serveurs-mcp-plus-intelligents-pour-les-llm/'
---

### Introduction : Les serveurs MCP comme API pour les LLM

<img class="img-right img-250px" src="/img/posts/mcp-architecture.jpg" alt="Architecture MCP"></img>

Les serveurs MCP (Model Context Protocol) sont aux grands modèles de langage (LLM) ce que les API REST sont aux applications : des moyens structurés et standardisés d'interagir avec des sources de données et des outils externes. Comme les API, les serveurs MCP varient considérablement dans leur conception, allant de solutions très génériques et flexibles à des solutions spécialisées, spécifiques à un domaine.

Dans cet article, nous examinerons plus en détail ces deux approches — générique ou spécifique au domaine — et expliquerons comment une conception réfléchie des serveurs MCP peut améliorer considérablement l'ergonomie et l'efficacité des applications basées sur les LLM.

> Tout au long de cet article, nous ferons référence au [jeu de données RAGmonsters](https://github.com/LostInBrittany/RAGmonsters), une base de données organisée contenant des informations détaillées sur diverses créatures fictives, leurs caractéristiques, leurs forces et leurs faiblesses. Cet exemple aidera à illustrer des scénarios pratiques de manière claire et à rendre les analogies intuitives lors de la discussion des différentes conceptions de serveurs MCP.

---

### Les API REST : une analogie utile

Considérez les API REST traditionnelles :

*   Les **API REST génériques** peuvent avoir un seul point de terminaison `POST /query` pour l'exécution de SQL brut. Flexible, oui, mais peu pratique pour les clients qui doivent comprendre parfaitement les rouages internes de la base de données.
*   Les **API REST spécifiques à un domaine** fournissent des points de terminaison comme `GET /monsters/{id}` ou `GET /monsters?type=dragon`, rendant les interactions intuitives et directes.

De même, les serveurs MCP peuvent choisir leur niveau d'abstraction en fonction de leur cas d'utilisation, en équilibrant la facilité d'utilisation avec la flexibilité et la complexité de mise en œuvre.

---

### Serveurs MCP génériques : un point de départ flexible

Un serveur MCP générique vise à être universellement applicable, offrant une flexibilité maximale pour interagir avec différentes bases de données ou outils sans connaissance préalable de leurs schémas ou de leur logique interne.

#### Exemple : Serveur MCP PostgreSQL avec un seul outil de requête

Considérez le serveur [@modelcontextprotocol/server-postgres](https://github.com/modelcontextprotocol/servers/tree/main/src/postgres), un serveur MCP qui fournit un seul point de terminaison, tel que `POST /query`, acceptant des requêtes SQL brutes et renvoyant les résultats de la base de données. Cette approche impose des contraintes minimales sur le type de requêtes que le client (dans ce cas, le LLM) peut exécuter.

#### Avantages

* ✅ **Simplicité** : Facile et rapide à déployer sans beaucoup de configuration.
* ✅ **Universalité** : Compatible avec pratiquement n'importe quelle base de données PostgreSQL.

#### Inconvénients

* ❌ **Charge cognitive élevée** : Le LLM doit comprendre des schémas de base de données complexes avant de pouvoir interroger efficacement.
* ❌ **Inefficacité** : Nécessite généralement plusieurs requêtes préliminaires pour bien saisir le schéma, ce qui entraîne une latence accrue et une efficacité réduite.
* ❌ **Problèmes de sécurité** : Accepter du SQL brut augmente la vulnérabilité à l'injection SQL si les entrées ne sont pas correctement gérées.

Si vous souhaitez voir un exemple de serveur MCP générique en action, vous pouvez consulter l'[exemple de serveur MCP PostgreSQL avec un chat LLM sur Clever Cloud](https://github.com/CleverCloud/mcp-pg-example), le déployer vous-même, le connecter à votre LLM préféré et l'expérimenter.

![Exemple de serveur MCP PostgreSQL avec un chat LLM sur Clever Cloud](/img/posts/2025-05-12-mcp-from-generic-to-domain-specific-01.png)

---

### Serveurs MCP spécifiques au domaine : une alternative sur mesure et efficace

Les serveurs MCP spécifiques au domaine offrent des outils et des points de terminaison spécialisés, adaptés au domaine exact de la base de données ou de l'application qu'ils servent, simplifiant considérablement la tâche du LLM.

#### Exemple : Serveur MCP PostgreSQL personnalisé pour RAGmonsters

Le serveur MCP RAGmonsters est conçu spécifiquement pour gérer une base de données contenant des informations détaillées sur diverses créatures, y compris leurs types, faiblesses et forces. Au lieu d'un point de terminaison de requête général, ce serveur MCP offre des outils axés sur le domaine comme :

*   `getMonsterByName`
*   `listMonstersByType`

Cette approche abstrait la structure de la base de données sous-jacente, permettant au LLM de faire des requêtes spécifiques de haut niveau sans avoir besoin de comprendre les schémas de table ou d'écrire du SQL.

#### Avantages

* ✅ **Charge cognitive réduite** : Le LLM interagit via des outils intuitifs et sémantiques.
* ✅ **Optimisation des performances** : Chaque outil peut être optimisé pour la vitesse et l'efficacité.
* ✅ **Sécurité renforcée** : Aucune exposition directe au SQL pour le LLM, ce qui réduit le risque d'attaques par injection.

#### Inconvénients

* ❌ **Coût de développement initial** : Une planification et une conception plus importantes sont nécessaires au départ.
* ❌ **Flexibilité réduite** : Des changements de schéma importants nécessitent des mises à jour du serveur MCP.

Si vous souhaitez voir un exemple de serveur MCP spécifique à un domaine en action, vous pouvez explorer le [serveur MCP PostgreSQL personnalisé pour RAGmonsters](https://github.com/LostInBrittany/RAGmonsters-mcp-pg). Suivez les instructions pour le déployer sur Clever Cloud et le tester vous-même.

![Serveur MCP PostgreSQL personnalisé pour RAGmonsters](/img/posts/2025-05-12-mcp-from-generic-to-domain-specific-02.png)

---

### Quand choisir entre générique et spécifique au domaine

Le choix entre des serveurs MCP génériques et spécifiques au domaine dépend de plusieurs facteurs :

| Facteur                        | Serveur MCP générique               | Serveur MCP spécifique au domaine          |
| ------------------------------ | ----------------------------------- | ------------------------------------------ |
| **Vitesse de développement**   | Configuration initiale rapide       | Nécessite une planification et une configuration initiales |
| **Performance & Efficacité**   | Moins efficace, plus de requêtes nécessaires | Optimisé, moins de requêtes nécessaires    |
| **Sécurité**                   | Plus vulnérable en raison du SQL brut | Plus sûr, pas d'exposition directe au SQL  |
| **Flexibilité & Adaptabilité** | Très adaptable aux changements de schéma | Nécessite des modifications avec les changements de schéma |
| **Ergonomie pour les utilisateurs finaux** | Complexe, charge cognitive élevée   | Outils simples et intuitifs              |

#### Questions clés pour guider votre décision :

*   **Qui sont les principaux utilisateurs ?**

    *   Des développeurs explorant des données ou des utilisateurs finaux cherchant des réponses directes ?
*   **Quelle est la complexité de votre schéma de base de données ?**

    *   Un schéma complexe bénéficie considérablement d'une abstraction spécifique au domaine.
*   **Quelle est l'importance de la performance et de la sécurité ?**

    *   Les serveurs spécifiques au domaine offrent des avantages évidents ici.

---

### Conclusion : Choisir le bon niveau d'abstraction

Comprendre les besoins spécifiques de votre projet vous guidera vers le bon choix, garantissant des interactions optimales pour vos applications basées sur les LLM.

Vous voulez explorer davantage ? Consultez nos exemples, l'[exemple de serveur MCP PostgreSQL avec un chat LLM sur Clever Cloud](https://github.com/CleverCloud/mcp-pg-example) et le [serveur MCP PostgreSQL personnalisé pour RAGmonsters sur GitHub](https://github.com/LostInBrittany/RAGmonsters-mcp-pg).
