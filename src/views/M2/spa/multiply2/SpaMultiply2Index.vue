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
    <img src="@/assets/sites/mc2/content/M2/spa/images/custom/Spanish-multiply2.png" class="app-series-header" />
  </div>
  <div>
    Un estudio sobre la vida de Cristo.
Jesús es nuestro modelo para la vida y el ministerio.  Debido a que Él es nuestro modelo, es importante conocer Su carácter, Sus prioridades y Su proceso para construir un movimiento de hacedores de discípulos. Este movimiento se multiplica en otros para cumplir la Gran Comisión.
  </div>
  <br />
  <br />
  <!-- begin chapters -->
    <!-- begin mc2 sdcard chapterText-->
<div class="app-link">
  <div class="card-link" @click="vuePush('spa-multiply2intro')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">Ser como Jesús: El modelo del Reino</div>
        <div class="chapter-description ltr"></div>
      </div>
    </div>
  </div>
</div>
<!-- end mc2 sdcard chapterText-->
<!-- begin mc2 sdcard chapterText-->
<div class="app-link">
  <div class="card-link" @click="vuePush('spa-multiply2intro1')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">Periodo 1: Preparación</div>
        <div class="chapter-description ltr">Alrededor de 4 a.C. – 26 d.C</div>
      </div>
    </div>
  </div>
</div>
<!-- end mc2 sdcard chapterText-->
<!-- begin mc2 sdcard chapterText-->
<div class="app-link">
  <div class="card-link" @click="vuePush('spa-multiply201')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">1.</div>
                            <div class="chapter_title series ltr">Jesús plenamente Dios se vuelve plenamente hombre</div>
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
  <div class="card-link" @click="vuePush('spa-multiply202')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">2.</div>
                            <div class="chapter_title series ltr">Jesús como un bebé (Encarnación)</div>
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
  <div class="card-link" @click="vuePush('spa-multiply203')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">3.</div>
                            <div class="chapter_title series ltr">Jesús como un niño</div>
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
  <div class="card-link" @click="vuePush('spa-multiply204')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">4.</div>
                            <div class="chapter_title series ltr">Jesús como un joven</div>
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
  <div class="card-link" @click="vuePush('spa-multiply205')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">5.</div>
                            <div class="chapter_title series ltr">Jesús como un adulto y carpintero</div>
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
  <div class="card-link" @click="vuePush('spa-multiply2intro2')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">Periodo 2: Fundamentos del ministerio</div>
        <div class="chapter-description ltr">Alrededor de la primavera 26 d.C - finales del 27 d.C</div>
      </div>
    </div>
  </div>
</div>
<!-- end mc2 sdcard chapterText-->
<!-- begin mc2 sdcard chapterText-->
<div class="app-link">
  <div class="card-link" @click="vuePush('spa-multiply206')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">6.</div>
                            <div class="chapter_title series ltr">La identidad de Jesús es revelada</div>
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
  <div class="card-link" @click="vuePush('spa-multiply207')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">7.</div>
                            <div class="chapter_title series ltr">Jesús y la Palabra de Dios</div>
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
  <div class="card-link" @click="vuePush('spa-multiply208')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">8.</div>
                            <div class="chapter_title series ltr">Venid y ve; Sígueme</div>
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
  <div class="card-link" @click="vuePush('spa-multiply209')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">9.</div>
                            <div class="chapter_title series ltr">Una familia real</div>
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
  <div class="card-link" @click="vuePush('spa-multiply210')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">10.</div>
                            <div class="chapter_title series ltr">La pasión revelada en el templo</div>
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
  <div class="card-link" @click="vuePush('spa-multiply211')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">11.</div>
                            <div class="chapter_title series ltr">Una búsqueda nocturna</div>
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
  <div class="card-link" @click="vuePush('spa-multiply212')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">12.</div>
                            <div class="chapter_title series ltr">La fuente del verdadero gozo</div>
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
  <div class="card-link" @click="vuePush('spa-multiply213')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">13.</div>
                            <div class="chapter_title series ltr">La cosecha está madura</div>
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
  <div class="card-link" @click="vuePush('spa-multiply214')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">14.</div>
                            <div class="chapter_title series ltr">Fe verdadera</div>
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
  <div class="card-link" @click="vuePush('spa-multiply215')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">15.</div>
                            <div class="chapter_title series ltr">Sin fe</div>
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
  <div class="card-link" @click="vuePush('spa-Período3')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">Período 3: Entrenamiento ministerial y Periodo 4: Expansión del Alcance  </div>
        <div class="chapter-description ltr">Alrededor de finales del 27 d.C - finales del 28 d.C</div>
      </div>
    </div>
  </div>
</div>
<!-- end mc2 sdcard chapterText-->
<!-- begin mc2 sdcard chapterText-->
<div class="app-link">
  <div class="card-link" @click="vuePush('spa-multiply216')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">16.</div>
                            <div class="chapter_title series ltr">Jesús en movimiento</div>
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
  <div class="card-link" @click="vuePush('spa-multiply217')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">17.</div>
                            <div class="chapter_title series ltr">Pescadores de hombres</div>
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
  <div class="card-link" @click="vuePush('spa-multiply218')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">18.</div>
                            <div class="chapter_title series ltr">Primera expedición para pescar hombres</div>
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
  <div class="card-link" @click="vuePush('spa-multiply219')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">19.</div>
                            <div class="chapter_title series ltr">Segunda expedición para pescar hombres</div>
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
  <div class="card-link" @click="vuePush('spa-multiply220')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">20.</div>
                            <div class="chapter_title series ltr">Tercera expedición para pescar hombres: </div>
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
  <div class="card-link" @click="vuePush('spa-multiply221')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">21.</div>
                            <div class="chapter_title series ltr">Cuarta expedición para pescar hombres</div>
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
  <div class="card-link" @click="vuePush('spa-multiply222')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">22.</div>
                            <div class="chapter_title series ltr">Quinta expedición para pescar hombres</div>
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
  <div class="card-link" @click="vuePush('spa-multiply223')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">23.</div>
                            <div class="chapter_title series ltr">Sexta expedición para pescar hombres</div>
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
  <div class="card-link" @click="vuePush('spa-multiply224')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">24.</div>
                            <div class="chapter_title series ltr">Decir la verdad</div>
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
  <div class="card-link" @click="vuePush('spa-multiply225')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">25.</div>
                            <div class="chapter_title series ltr">Jesús, El que dice la verdad</div>
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
  <div class="card-link" @click="vuePush('spa-multiply2intro5')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">Período 5: Multiplicación del liderazgo</div>
        <div class="chapter-description ltr">Alrededor de finales del 28 d.C – primavera del 30 d.C.</div>
      </div>
    </div>
  </div>
</div>
<!-- end mc2 sdcard chapterText-->
<!-- begin mc2 sdcard chapterText-->
<div class="app-link">
  <div class="card-link" @click="vuePush('spa-multiply226')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">26.</div>
                            <div class="chapter_title series ltr">Elegir líderes enseñables</div>
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
  <div class="card-link" @click="vuePush('spa-multiply227')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">27.</div>
                            <div class="chapter_title series ltr">Expectativas de liderazgo</div>
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
  <div class="card-link" @click="vuePush('spa-multiply228')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">28.</div>
                            <div class="chapter_title series ltr">El plan del Padre</div>
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
  <div class="card-link" @click="vuePush('spa-multiply229')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">29.</div>
                            <div class="chapter_title series ltr">Liderazgo y Autoridad</div>
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
  <div class="card-link" @click="vuePush('spa-multiply230')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">30.</div>
                            <div class="chapter_title series ltr">Liderazgo incomprendido</div>
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
  <div class="card-link" @click="vuePush('spa-multiply231')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">31.</div>
                            <div class="chapter_title series ltr">Perdón y liderazgo</div>
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
  <div class="card-link" @click="vuePush('spa-multiply232')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">32.</div>
                            <div class="chapter_title series ltr">Liderazgo y fe</div>
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
  <div class="card-link" @click="vuePush('spa-multiply233')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">33.</div>
                            <div class="chapter_title series ltr">Liderazgo y fortalezas espirituales</div>
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
  <div class="card-link" @click="vuePush('spa-multiply234')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">34.</div>
                            <div class="chapter_title series ltr">Enviando líderes</div>
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
  <div class="card-link" @click="vuePush('spa-multiply235')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">35.</div>
                            <div class="chapter_title series ltr">Liderando en medio de la aflicción</div>
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
  <div class="card-link" @click="vuePush('spa-multiply236')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">36.</div>
                            <div class="chapter_title series ltr">Liderazgo y provisión</div>
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
  <div class="card-link" @click="vuePush('spa-multiply237')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">37.</div>
                            <div class="chapter_title series ltr">Liderazgo y miedo</div>
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
  <div class="card-link" @click="vuePush('spa-multiply238')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">38.</div>
                            <div class="chapter_title series ltr">Cosecha de una vida transformada</div>
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
  <div class="card-link" @click="vuePush('spa-multiply239')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">39.</div>
                            <div class="chapter_title series ltr">Retiro y evaluación de liderazgo</div>
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
  <div class="card-link" @click="vuePush('spa-multiply240')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">40.</div>
                            <div class="chapter_title series ltr">Multiplicación basada en la cercanía</div>
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
  <div class="card-link" @click="vuePush('spa-multiply241')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">41.</div>
                            <div class="chapter_title series ltr">Liderazgo, gracia y compasión</div>
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
  <div class="card-link" @click="vuePush('spa-multiply242')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">42.</div>
                            <div class="chapter_title series ltr">Jesús, Luz del mundo</div>
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
  <div class="card-link" @click="vuePush('spa-multiply243')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">43.</div>
                            <div class="chapter_title series ltr">Multiplicación de liderazgo</div>
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
  <div class="card-link" @click="vuePush('spa-multiply244')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">44.</div>
                            <div class="chapter_title series ltr">Liderazgo sin levadura</div>
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
  <div class="card-link" @click="vuePush('spa-multiply245')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">45.</div>
                            <div class="chapter_title series ltr">El liderazgo es mayordomía</div>
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
  <div class="card-link" @click="vuePush('spa-multiply246')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">46.</div>
                            <div class="chapter_title series ltr">Liderazgo apasionado</div>
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
  <div class="card-link" @click="vuePush('spa-multiply247')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">47.</div>
                            <div class="chapter_title series ltr">Liderazgo de servicio</div>
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
  <div class="card-link" @click="vuePush('spa-multiply248')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">48.</div>
                            <div class="chapter_title series ltr">Liderazgo sumiso</div>
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
  <div class="card-link" @click="vuePush('spa-multiply249')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">49.</div>
                            <div class="chapter_title series ltr">Liderazgo crucificado</div>
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
  <div class="card-link" @click="vuePush('spa-multiply250')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">50.</div>
                            <div class="chapter_title series ltr">Liderazgo de resurrección</div>
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
  <div class="card-link" @click="vuePush('spa-multiply251')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">51.</div>
                            <div class="chapter_title series ltr">Liderazgo Pastoral</div>
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
  <div class="card-link" @click="vuePush('spa-multiply252')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">52.</div>
                            <div class="chapter_title series ltr">Liderazgo obediente</div>
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

			<td class="social" @click="share('lesson', 'Library: ', '/content/M2/spa/multiply2/index.html')">
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