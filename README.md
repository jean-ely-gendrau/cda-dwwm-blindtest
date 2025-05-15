# BlindTest

> Une application qui permet de lancer une musique.

## Cas d'utilisation

L'utilisateur doit deviner le nom de la musique.
Il gagne des points.

## Stack Technique

- `NextJS` _15.2_ (**Frontend** + **Backend** `API REST`)
- `Mysql` _8_ (database url: `mysql://user_env:password_env@mysql:3325/blindtest`)
- `Adminer` (Gerer la base : `http://localhost:8100`)
- `Docker` et `Docker Compose` pour démarrer les services
- `Javascript`/`Typescript`
- `Tailwind` + `CSS`
- `Yarn` pour gérer les dépendances

## Cas d'utilisation

![UseCaseBlindTest](./data-repos/usecase.svg)

```uml
@startuml
:User: --> (Use#1)
:User: --> (Use#2)
:User: --> (Use#3)
:User: --> (Use#4)
:User: --> (Use#5)
:User: --> (Use#6)
"Créer un espace dédié au BlindTest." as (Use#1)
"Choisissez un pseudonyme." as (Use#2)
"Participer à un salon de jeux." as (Use#3)
"Participer à une partie en cours." as (Use#4)
"Remporter des points." as (Use#5)
"Consulter l'historique des parties."as (Use#6)
@enduml
```

## Docker compose

Services inclus dans la composition Docker

- Mysql 8
- Adminer

> [NOTE]
> Docker installer et démarrer sur votre post de travail

Pour initialiser le container, dans votre terminal executer

```bash
docker compose up -d
```

## Démarrer le projet

Pour bien démarrer le projet, cloner le repos, changer de répértoire vers `app-nextjs` executer l'installation de nextJS avec le gestionnaire de dépendance `yarn`

Ces commandes vous permettent de configurer l’environnement local pour le développement

```
git clone https://github.com/jean-ely-gendrau/cda-dwwm-blindtest
cd app-nextjs
yarn
```
