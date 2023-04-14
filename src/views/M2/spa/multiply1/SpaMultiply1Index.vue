<script>
import { useShare} from "@/assets/javascript/share.js"
import { useRevealMedia } from "@/assets/javascript/revealMedia.js"

export default {
  methods:{
    pageGoBack(returnto){
      if (localStorage.getItem("returnpage")) {
        returnto = localStorage.getItem("returnpage");
        localStorage.removeItem("returnpage")
      }
      this.$router.push({
        name: returnto,
      })
    },
    share(what, v1, v2){
      useShare(what, v1, v2)
    },
    vuePush(id){
      this.$router.push({
        name: id,
      })
    }
  },
  mounted() {
    useRevealMedia()
    localStorage.setItem("lastpage", this.$route.name)
  }
}
</script>
<template>
  <!-- sdcard template from mc2 -->

<div class="page_content" dir="ltr">
  <div id="nav">
    <div class="nav full internal-link" @click="this.pageGoBack('spa-index')">
        <img src="@/assets/sites/mc2/images/ribbons/mc2back.png" class="nav full" />
    </div>
</div>
  <div  class="app-series-header">
    <img src="@/assets/sites/mc2/content/M2/spa/images/custom/spanish-called-by-jesus.png" class="app-series-header" />
  </div>
  <div>
    Llamados por Jesús está diseñado para ayudarte a ti y a tus amigos a descubrir más sobre lo que Jesús ha hecho por ti y capacitarte para compartir esos descubrimientos con tus amigos.
  </div>
  <br />
  <br />
  <!-- begin chapters -->
    <!-- begin mc2 sdcard chapterText-->
<div class="app-link">
  <div class="card-link" @click="vuePush('spa-multiply101')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">1.</div>
                            <div class="chapter_title series ltr">Seguridad de Salvación</div>
                        </div>
                    <!-- chapter title end -->
</div>
        <div class="chapter-description ltr"></div>
      </div>
    </div>
  </div>
</div>
<!-- end mc2 sdcard chapterText-->
<!-- begin mc2 sdcard chapterText-->
<div class="app-link">
  <div class="card-link" @click="vuePush('spa-multiply102')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">2.</div>
                            <div class="chapter_title series ltr">Relación y compañerismo</div>
                        </div>
                    <!-- chapter title end -->
</div>
        <div class="chapter-description ltr"></div>
      </div>
    </div>
  </div>
</div>
<!-- end mc2 sdcard chapterText-->
<!-- begin mc2 sdcard chapterText-->
<div class="app-link">
  <div class="card-link" @click="vuePush('spa-multiply103')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">3.</div>
                            <div class="chapter_title series ltr">Caminando en el Espíritu</div>
                        </div>
                    <!-- chapter title end -->
</div>
        <div class="chapter-description ltr"></div>
      </div>
    </div>
  </div>
</div>
<!-- end mc2 sdcard chapterText-->
<!-- begin mc2 sdcard chapterText-->
<div class="app-link">
  <div class="card-link" @click="vuePush('spa-multiply104')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">4.</div>
                            <div class="chapter_title series ltr">Identificarse audazmente con Jesús</div>
                        </div>
                    <!-- chapter title end -->
</div>
        <div class="chapter-description ltr"></div>
      </div>
    </div>
  </div>
</div>
<!-- end mc2 sdcard chapterText-->
<!-- begin mc2 sdcard chapterText-->
<div class="app-link">
  <div class="card-link" @click="vuePush('spa-multiply105')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">5.</div>
                            <div class="chapter_title series ltr">Creciendo a través de la Palabra de Dios</div>
                        </div>
                    <!-- chapter title end -->
</div>
        <div class="chapter-description ltr"></div>
      </div>
    </div>
  </div>
</div>
<!-- end mc2 sdcard chapterText-->
<!-- begin mc2 sdcard chapterText-->
<div class="app-link">
  <div class="card-link" @click="vuePush('spa-multiply106')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">6.</div>
                            <div class="chapter_title series ltr">Hablar con Dios</div>
                        </div>
                    <!-- chapter title end -->
</div>
        <div class="chapter-description ltr"></div>
      </div>
    </div>
  </div>
</div>
<!-- end mc2 sdcard chapterText-->
<!-- begin mc2 sdcard chapterText-->
<div class="app-link">
  <div class="card-link" @click="vuePush('spa-multiply107')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">7.</div>
                            <div class="chapter_title series ltr">Permaneciendo en Jesús</div>
                        </div>
                    <!-- chapter title end -->
</div>
        <div class="chapter-description ltr"></div>
      </div>
    </div>
  </div>
</div>
<!-- end mc2 sdcard chapterText-->
<!-- begin mc2 sdcard chapterText-->
<div class="app-link">
  <div class="card-link" @click="vuePush('spa-multiply108')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">8.</div>
                            <div class="chapter_title series ltr">Pregunta Asombrosa, Cuidado</div>
                        </div>
                    <!-- chapter title end -->
</div>
        <div class="chapter-description ltr"></div>
      </div>
    </div>
  </div>
</div>
<!-- end mc2 sdcard chapterText-->
<!-- begin mc2 sdcard chapterText-->
<div class="app-link">
  <div class="card-link" @click="vuePush('spa-multiply109')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">9.</div>
                            <div class="chapter_title series ltr">Personas preparadas por Dios</div>
                        </div>
                    <!-- chapter title end -->
</div>
        <div class="chapter-description ltr"></div>
      </div>
    </div>
  </div>
</div>
<!-- end mc2 sdcard chapterText-->
<!-- begin mc2 sdcard chapterText-->
<div class="app-link">
  <div class="card-link" @click="vuePush('spa-multiply110')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">10.</div>
                            <div class="chapter_title series ltr">Mi historia</div>
                        </div>
                    <!-- chapter title end -->
</div>
        <div class="chapter-description ltr"></div>
      </div>
    </div>
  </div>
</div>
<!-- end mc2 sdcard chapterText-->
<!-- begin mc2 sdcard chapterText-->
<div class="app-link">
  <div class="card-link" @click="vuePush('spa-multiply111')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">11.</div>
                            <div class="chapter_title series ltr">Ser un testigo</div>
                        </div>
                    <!-- chapter title end -->
</div>
        <div class="chapter-description ltr"></div>
      </div>
    </div>
  </div>
</div>
<!-- end mc2 sdcard chapterText-->
<!-- begin mc2 sdcard chapterText-->
<div class="app-link">
  <div class="card-link" @click="vuePush('spa-multiply112')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">12.</div>
                            <div class="chapter_title series ltr">Abriendo puertas</div>
                        </div>
                    <!-- chapter title end -->
</div>
        <div class="chapter-description ltr"></div>
      </div>
    </div>
  </div>
</div>
<!-- end mc2 sdcard chapterText-->
<!-- begin mc2 sdcard chapterText-->
<div class="app-link">
  <div class="card-link" @click="vuePush('spa-multiply113')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">13.</div>
                            <div class="chapter_title series ltr">Comprometiéndonos unos con otros</div>
                        </div>
                    <!-- chapter title end -->
</div>
        <div class="chapter-description ltr"></div>
      </div>
    </div>
  </div>
</div>
<!-- end mc2 sdcard chapterText-->
<!-- begin mc2 sdcard chapterText-->
<div class="app-link">
  <div class="card-link" @click="vuePush('spa-multiply114')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">14.</div>
                            <div class="chapter_title series ltr">Recordando el Sacrificio de Jesús</div>
                        </div>
                    <!-- chapter title end -->
</div>
        <div class="chapter-description ltr"></div>
      </div>
    </div>
  </div>
</div>
<!-- end mc2 sdcard chapterText-->
<!-- begin mc2 sdcard chapterText-->
<div class="app-link">
  <div class="card-link" @click="vuePush('spa-multiply115')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">15.</div>
                            <div class="chapter_title series ltr">Dar con propósito</div>
                        </div>
                    <!-- chapter title end -->
</div>
        <div class="chapter-description ltr"></div>
      </div>
    </div>
  </div>
</div>
<!-- end mc2 sdcard chapterText-->
<!-- begin mc2 sdcard chapterText-->
<div class="app-link">
  <div class="card-link" @click="vuePush('spa-multiply116')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">16.</div>
                            <div class="chapter_title series ltr">El costo del discipulado</div>
                        </div>
                    <!-- chapter title end -->
</div>
        <div class="chapter-description ltr"></div>
      </div>
    </div>
  </div>
</div>
<!-- end mc2 sdcard chapterText-->
<!-- begin mc2 sdcard chapterText-->
<div class="app-link">
  <div class="card-link" @click="vuePush('spa-multiply117')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">17.</div>
                            <div class="chapter_title series ltr">Sencillo Servicio en la Iglesia</div>
                        </div>
                    <!-- chapter title end -->
</div>
        <div class="chapter-description ltr"></div>
      </div>
    </div>
  </div>
</div>
<!-- end mc2 sdcard chapterText-->

   <!-- end chapters -->
  <div>
    <!-- begin sdcard languageFooterSingle -->
<!-- begin mc2 sdcard languageFooter -->

<div class="languages" id="languages"><img class="languages" src="@/assets/sites/mc2/images/standard/OtherLanguagesTop.png" /></div>
<table class="social">
	<tbody>
		<tr>
			<td class="social"  @click="share('android', 'spa', '')">
				<img  class="social" src="@/assets/sites/mc2/images/standard/android.png" />
			</td>

			<td class="social" @click="share('lesson', 'Library: ', '/content/M2/spa/multiply1/index.html')">
				<img class="social" src="@/assets/sites/mc2/images/standard/Share.png" />
			</td>
		</tr>
	</tbody>
</table>
<div class="footer">
<p class="footer">MC2</p>
<p class="footer" @click="share('website', 'https://GlobalChurchMovements.org', '')"> GlobalChurchMovements.org</p>
</div>

<!-- end mc2 sdcard languageFooter -->
<!-- end sdcard languageFooterSingle -->

  </div>
</div>
</template>
<!--- Created by capacitor - publishSeries-->
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->