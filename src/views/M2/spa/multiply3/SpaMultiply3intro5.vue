<script>
import SQLiteService from '@/services/SQLiteService.js'
import { useFindSummaries, useFindCollapsible, usePopUp} from "@/assets/javascript/revealText.js"
import { useRevealMedia } from "@/assets/javascript/revealMedia.js"
import { useShare} from "@/assets/javascript/share.js"
import VueImageZoomer from '@/components/VueImageZoomer.vue'
import '@/assets/styles/vueImageZoomer.css';


export default {
  components: {
    VueImageZoomer
  },
   methods:{
    async addNote(noteid){
       var noteText = document.getElementById(noteid).value
       var noteHeight = await SQLiteService.addNote(noteid, this.$route.name, noteText)
       document.getElementById(noteid).style.height = noteHeight
    },
    goToPageAndSetReturn(gotoPath){
      localStorage.setItem("returnpage", this.$route.name);
      this.$router.push({
        path: gotoPath,
      })
    },
    pageGoBack(returnto){
      if (localStorage.getItem("returnpage")) {
        returnto = localStorage.getItem("returnpage");
        localStorage.removeItem("returnpage")
      }
      this.$router.push({
        name: returnto,
      })
    },
    popUp(verse){
      usePopUp(verse)
    },
    share(what, v1, v2){
      useShare(what, v1, v2)
    },
    vuePush(id){
      this.$router.push({
        name: id,
      })
    },
  },
  async mounted() {
    useFindSummaries()
    useFindCollapsible()
    useRevealMedia()
    await SQLiteService.notes(this.$route.name)
  },
}
</script>
<template>
  <div id="nav">
    <div class="nav full internal-link" @click="this.pageGoBack('spa-multiply3-index')">
        <img src="@/assets/sites/mc2/images/ribbons/mc2back.png" class="nav full" />
    </div>
</div>
<div class="page_content ltr">
<h1>Período 5</h1>
<div id="showVideoOptions"></div>
  <p><strong>Env&iacute;o, Multiplicaci&oacute;n y Entrenamiento de Movimientos&nbsp;<span lang="es"><span><span>(3er. Viaje Misionero desde Antioqu&iacute;a) [52 -57 d.C.]</span></span></span></strong></p>

<p>   
    <div class="zoom-image">
    <vue-image-zoomer
    regular="/images/zoom/sites/mc2/content/M2/spa/multiply3/Trip3.png" 
    zoom="/images/zoom/sites/mc2/content/M2/spa/multiply3/Trip3.png" :zoom-amount="3" img-class="img-fluid" alt="">
    <img src="@/assets/sites/mc2/content/M2/spa/multiply3/Trip3.png" img-class="img-fluid" />
    </vue-image-zoomer>
    </div></p>

<p>Este per&iacute;odo abarca unos cinco a&ntilde;os. Varios centros de movimiento ya han estado multiplicando disc&iacute;pulos e iglesias por m&aacute;s de 6 a&ntilde;os. Durante este per&iacute;odo, se establece en <span lang="es"><span><span>&Eacute;feso</span></span></span> un gran centro de movimiento de env&iacute;o de misiones. Mientras que el trabajo de plantaci&oacute;n de iglesias est&aacute; echando ra&iacute;ces en &Eacute;feso, los l&iacute;deres est&aacute;n siendo enviados y las iglesias existentes est&aacute;n siendo entrenadas. El per&iacute;odo est&aacute; marcado por el entrenamiento diario, milagros extraordinarios, escritura de cartas y expansi&oacute;n del Reino para que toda la parte oriental del Imperio Romano puedan ser alcanzada.</p>

<p>Cartas escritas durante este per&iacute;odo:</p>

<ul>
	<li>1 Corintios, 55 d.C.</li>
	<li>2 Corintios, 56 d.C.</li>
	<li>Romanos, 57 d.C</li>
</ul>


<!-- begin sdcard languageFooterSingle -->
<!-- begin mc2 sdcard languageFooter -->

<div class="languages" id="languages"><img class="languages" src="@/assets/sites/mc2/images/standard/OtherLanguagesTop.png" /></div>
<table class="social">
	<tbody>
		<tr>
			<td class="social"  @click="share('android', 'spa', '')">
				<img  class="social" src="@/assets/sites/mc2/images/standard/android.png" />
			</td>

			<td class="social" @click="share('lesson', 'Período 5: ', '/content/M2/spa/multiply3/multiply3intro5.html')">
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

</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->