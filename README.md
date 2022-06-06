# Quickview
Quick view using Vue js and JavaScript for Shopify 2.o themes


<b>-Create snippet for quicklyview popup and js<br></b>
quickview_snippet.liquid<br>
quickview.js

<b>-Add button html in product card snippets<br></b>
<div class=" quick-view ">
  <div class="product-card__quickview mt-2">
    <a class="js-btn-quickview btn btn--quickview" href="javascript:void(0);" data-bs-placement="top" data-handle="{{ card_product.handle }}" data-id= "{{card_product.id}}" title="quickview">
      <span>quickview</span>
    </a>
  </div>
</div><br><br>

<b>-Add vue js before the </head> tag in theme liquid</b>
<b>theme.liquid</b>
<script src="{{ 'quickview.js' | asset_url }}" defer></script><br>
<script src="https://cdn.jsdelivr.net/npm/vue@2.6.0"></script><br><br>

<b>-Add this both snippet and js on theme liquid.<br></b>
{% include 'quickview_snippet' %}


