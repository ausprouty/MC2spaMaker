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
<h1>Período 3</h1>
<div id="showVideoOptions"></div>
  <p><strong>Expansi&oacute;n a nuevos territorios&nbsp;(1er. Viaje Misionero desde Antioqu&iacute;a) [46-48 d.C.]</strong></p>

<p>   
    <div class="zoom-image">
    <vue-image-zoomer
    regular="/images/zoom/sites/mc2/content/M2/spa/multiply3/Trip1.png" 
    zoom="/images/zoom/sites/mc2/content/M2/spa/multiply3/Trip1.png" :zoom-amount="3" img-class="img-fluid" alt="Trip1">
    <img src="@/assets/sites/mc2/content/M2/spa/multiply3/Trip1.png" img-class="img-fluid" />
    </vue-image-zoomer>
    </div>Este per&iacute;odo cubre el viaje del primer equipo misionero que el Esp&iacute;ritu envi&oacute; desde la iglesia en Antioqu&iacute;a. Est&aacute; marcado por milagros, ense&ntilde;anza en sinagogas, persecuci&oacute;n y plantaci&oacute;n de iglesias entre los nuevos pueblos. Ejemplos de hacer disc&iacute;pulos en diferentes contextos y situaciones se encuentran en este per&iacute;odo.</p>

<p>Cartas escritas durante este Per&iacute;odo</p>

<ul>
	<li>
	<p>G&aacute;latas, 48 d.C.</p>
	</li>
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

			<td class="social" @click="share('lesson', 'Período 3: ', '/content/M2/spa/multiply3/multiply3intro3.html')">
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