# Vue Sticky

## Overview

Sticky plugin for Vue 2. Based on [rguanghui/vue-sticky](https://github.com/rguanghui/vue-sticky)

## Installation

```bash
$ yarn add vue-sticky-alter
```
or
```bash
$ npm install vue-sticky-alter
```

```js
import Vue from 'vue'
import VueSticky from 'vue-sticky-alter'

Vue.use(VueSticky)
```

## Usage

```html
<ELEMENT v-sticky="{ zIndex: NUMBER, stickyTop: NUMBER }">
  <div> <!-- sticky wrapper, IMPORTANT -->
    CONTENT
  </div>
</ELEMENT>
```