<template>
  <div class="article-page">
    <div class="banner">
      <div class="container">
        <h1>title</h1>
        <div class="article-meta">
          <a>
            <img src="article.author.image" />
          </a>
          <div class="info">
            <a> username </a>
            <span class="date">createdAt </span>
          </div>
          <span>
            <a class="btn btn-outline-secondary btn-sm">
              <i class="ion-edit" />
              Edit Article
            </a>
            <button class="btn btn-outline-danger btn-sm">
              <i class="ion-trash-a" />
              Delete Article
            </button>
          </span>
        </div>
      </div>
    </div>
    <div class="container page">
      <!-- <mcv-loading v-if="isLoading" />
      <mcv-error-message v-if="isLoading" :message="error" /> -->
      <div class="row article-content">
        <div class="col-xs-12">
          <div>
            <p>body</p>
          </div>
          TAG LIST IS HERE
        </div>
      </div>
    </div>
  </div>
</template>
