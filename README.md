## Présentation du projet (comme sur steam)

Plongez dans une expérience immersive créée par une équipe d'étudiants passionnés, explorant le spectre complexe de la violence et sa perception au travers d'un monde interactif captivant.  

Dans ce jeu novateur, vous avez la possibilité d'incarner un personnage unique que vous créez, vous plongeant au cœur de diverses situations chargées de violence. Chaque défi vous confronte à des choix cruciaux, vous obligeant à explorer différentes manières de réagir, et façonnant ainsi le cours de votre aventure.  

Au-delà de l'exploration de la violence sous ses multiples formes, ce jeu explore également la philosophie du jiu-jitsu, une discipline ancienne qui va bien au-delà des simples mouvements physiques. Cette notion fondamentale vous guide tout au long de votre parcours, vous enseignant des principes de maîtrise de soi, d'équilibre et de stratégie pour faire face aux défis avec sagesse et discernement.  

Préparez-vous à plonger dans un monde où vos choix définissent votre parcours, où la perception de la violence évolue au fil de vos actions, et où la pratique du jiu-jitsu devient un guide essentiel pour surmonter les épreuves. Relevez le défi et explorez les profondeurs fascinantes de ce jeu, où la réflexion et l'action se rencontrent pour vous offrir une expérience unique et enrichissante.

## Lien vers le téléchargement

[inclure un lien ou autre vers le fichier d’installation dans le git]


## Procédure d’installation (pour dev)

### Prérequis (versions)
NodeJS : [18.18.2 ou supperieur](https://nodejs.org/en)  

pnpm : [https://pnpm.io/installation](https://pnpm.io/installation)  

PHPStorm : [https://www.jetbrains.com/fr-fr/phpstorm/](https://www.jetbrains.com/fr-fr/phpstorm/)  

gitbash (ou autre moyen d’acceder a git) : [https://git-scm.com/downloads](https://git-scm.com/downloads)  


### Commencement
Commencez par forker le repository git : [Repository Git](https://gitlab.unistra.fr/maes-t3/maj23-t3-d)  

ouvrez le terminal avec un accès à git ou git Desktop, clonez votre dépôt git avec
```git clone [votre lien]```.  

pour mettre en place votre projet git, regardez [wiki/git_commands]


### Arborescence
Brainstorm -> contiens toutes nos 1eres idée  

Game -> api -> contient l’API utilisée en jeux  

Interface -> le fichier a ouvrir sur votre IDE  

public -> contient les images et asset

src -> Contient les Modèles, vue et contrôler ainsi que les routes et le store

le reste du fichier interface n’est pas a modifier

Report -> Les rapport de chaque devs du projet

Ressource -> les ressource trouvée ou utilisée pour chaqu’une de nos idées

Wiki -> Contient une résumé des commandes git utiles


### Mise en place
Telechargez et installez Node.JS dans le fichier de votre choix.

Telechargez et installez pnpm suivant votre système d’exploitation.

Ouvrez un terminal dans le fichier [game/Interface]
```cd votre/chemin/vers/game/interface```

mettez a jour pnpm
```pnpm update```

Installer vue@cli comme suit
```npm install -g @vue/cli```

pui installez toutes les dependence avec
```pnpm install```

Ouvrez le dossier interface avec PHPStorm (que l’on va appeler PS). Pour executé la version dev il faut parametrer une nouvelle configuration pour cela : 

Creez une nouvelle configuration,


Sélectionnez une configuration npm

Selectionnez le chemin vers votre package.json
votre chemin vers node.exe que vous avez installer avec Node.JS
et pour package manager le chemin vers pnpm trouvable grace a 
Sur windows : ```pnpm where```
Sur Linux : ````which pnpm```
Appliquez et validez.

Félicitation, vous pouvez maintenant exécuter le code en tant que dev et le modifié. Pour toutes question, veuillez vous référer à la doc Vue.JS : https://vuejs.org/guide/introduction.html


