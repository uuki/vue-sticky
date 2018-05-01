# Vue Sticky

## Overview

Sticky plugin for Vue 2. Based on [rguanghui/vue-sticky](https://github.com/rguanghui/vue-sticky)

## Installation

```js
import Vue from 'vue'
import VueSticky from 'vue-sticky'

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