<template>
  <article class="article">
    <div class="article__content">
      <template v-for="(demo, i) in 10">
        <h2 class="demo-head" v-sticky="{ zIndex: i, stickyTop: 0 }">SAMPLE {{i+1}}</h2>

        <section class="demo-section">
          <p>SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT</p>
          <p>SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT</p>
        </section>
      </template>
    </div>
  </article>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        stickyConfig: {
          zIndex: 1,
          stickyTop: 0
        }
      }
    },
  }
</script>

<style>
  body {
    margin: 0;
    font-size: 16px;
  }

  p {
    line-height: 1.8;
    margin: 0 0 30px;
    letter-spacing: 0.02em;
  }

  p:last-child {
    margin-bottom: 0;
  }

  .article {
    width: 980px;
    margin: auto;
    padding: 30px 0;
    display: flex;
  }

  .article__content {
    flex: 1;
  }

  .demo-head {
    border-top: 4px solid #009688;
    padding: 12px 20px;
    margin: 0 0 40px;
    background-color: #eee;
  }

  .demo-section {
    margin-bottom: 60px;
    padding: 20px 30px;
    background-color: #eee;
  }

  .demo-section:last-child {
    margin-bottom: 0;
  }
</style>