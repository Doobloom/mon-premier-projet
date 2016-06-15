# Cours Sass
L'essentiel du cours sur Sass

http://sass-lang.com/

## Sass est un préprocesseur
Il sert à générer des fichiers CSS. Il s'agit d'une surcouche du langage CSS, ajoutant des fonctionnalités. Les autres préprocesseurs partagent globalement tous ces mêmes fonctionnalités.

### Variables

On peut définir des variables en Sass :

```sass
$color-red: #a00000;

element {
	background: $color-red;
}
```

Donnera comme résultat CSS :

```css
element {
	background: #a00000;
}
```

### Imbrication
On peut imbriquer les déclarations :

```sass
.parent {
	color: blue;

	.enfant {
		color: red;
	}
}
```

Résultat :
```css
.parent {
	color: blue;
}

.parent .enfant {
	color: red;
}
```

Le caractère `&` sert de référence au parent lors d'une imbrication :

```sass
.maclasse {
	color: blue;

	&-spec {
		color: red;
	}
}
```

Résultat :
```css
.maclasse {
	color: blue;
}

.maclasse-spec {
	color: red;
}
```

### Mixins

### Fonctions


# Compilation

Sans l'aide d'un **task-runner** (Grunt, Gulp, Brunch…), on utilise la ligne de commande pour compiler nos fichiers Sass en CSS.

## Installation
```bash
npm i -g node-sass
```

## Compilation

```bash
node-sass <source> <output>
```

Exemple :
```bash
node-sass mon-fichier.scss mon-fichier.css
```
