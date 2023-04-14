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
    <div class="nav full internal-link" @click="this.pageGoBack('spa-multiply2-index')">
        <img src="@/assets/sites/mc2/images/ribbons/mc2back.png" class="nav full" />
    </div>
</div>
<div class="page_content ltr">
<h1>Periodo 1: Preparación</h1>
<div id="showVideoOptions"></div>
  <p>   
    <div class="zoom-image">
    <vue-image-zoomer
    regular="/images/zoom/sites/mc2/content/M2/spa/images/custom/Period1.png" 
    zoom="/images/zoom/sites/mc2/content/M2/spa/images/custom/Period1.png" :zoom-amount="3" img-class="img-fluid" alt="">
    <img src="@/assets/sites/mc2/content/M2/spa/images/custom/Period1.png" img-class="img-fluid" />
    </vue-image-zoomer>
    </div></p>

<p style="text-align:justify"><span><span><span lang="es"><span>Este per&iacute;odo dura desde el nacimiento de Jes&uacute;s alrededor del 4 a.C hasta aproximadamente los 30 a&ntilde;os.&nbsp;</span></span></span></span><span lang="es"><span><span>Preparaci&oacute;n para una vida y un movimiento de multiplicaci&oacute;n.</span></span></span></p>

<p style="text-align:justify"><span><span><span lang="es"><span>Este per&iacute;odo se caracteriza por lo siguiente:</span></span></span></span></p>

<ul>
	<li style="text-align:justify"><span><span><span lang="es"><span>Llegar a ser la persona que &Eacute;l buscaba para multiplicar en otros</span></span></span></span></li>
	<li style="text-align:justify"><span><span><span lang="es"><span>Prepararse para una vida piadosa y un movimiento de multiplicaci&oacute;n</span></span></span></span></li>
</ul>

<ul>
	<li class="nobreak-final-final" style="text-align:justify"><span><span><span lang="es"><span>Durante los primeros 30 a&ntilde;os de Su vida, Jes&uacute;s &quot;crec&iacute;a y se convert&iacute;a&quot; (<span class="popup-link" @click = "popUp('pop1')"> Lucas 2:40</span>,&nbsp;</span></span></span></span>

	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">40&nbsp;</sup>El ni&ntilde;o crec&iacute;a y se fortalec&iacute;a; progresaba en sabidur&iacute;a, y la gracia de Dios lo acompa&ntilde;aba.</p>
	<!-- end bible --></div>
	&nbsp;<span class="popup-link" @click = "popUp('pop2')"> Lucas 2:51-52</span>)&nbsp;

	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<p><sup class="versenum">51&nbsp;</sup>As&iacute; que Jes&uacute;s baj&oacute; con sus padres a Nazaret y vivi&oacute; sujeto a ellos. Pero su madre conservaba todas estas cosas en el coraz&oacute;n.<sup class="versenum">52&nbsp;</sup>Jes&uacute;s sigui&oacute; creciendo en sabidur&iacute;a y estatura, y cada vez m&aacute;s gozaba del favor de Dios y de toda la gente.</p>
	<!-- end bible --></div>
	en la persona que se iba a multiplicar en otros.&nbsp; Todo esto ocurri&oacute; antes de que comenzara su ministerio p&uacute;blico.&nbsp; Era evidente, desde el principio de su ministerio, Jes&uacute;s hab&iacute;a estado orando, planeando y aclarando cu&aacute;l ser&iacute;a Su ministerio y c&oacute;mo lo har&iacute;a.&nbsp;</li>
</ul>

<p style="text-align:justify"><span><span><span lang="es"><span>La pasi&oacute;n de su coraz&oacute;n era pura.&nbsp; Su prop&oacute;sito era claro.&nbsp; El proceso ministerial que decidi&oacute; fue sencillo.&nbsp; Se conectaba con los perdidos, los ganar&iacute;a para &Eacute;l, los edificar&iacute;a en lo que significa ser un seguidor, los entrenar&iacute;a en la pesca de otros y los enviaba a multiplicar el mismo proceso con otros.</span></span></span></span></p>

<p><span lang="es"><span><span>Jes&uacute;s determin&oacute; que &Eacute;l buscar&iacute;a y obrar&iacute;a a trav&eacute;s de las personas que su Padre hab&iacute;a preparado.</span></span></span></p>


<!-- begin sdcard languageFooterSingle -->
<!-- begin mc2 sdcard languageFooter -->

<div class="languages" id="languages"><img class="languages" src="@/assets/sites/mc2/images/standard/OtherLanguagesTop.png" /></div>
<table class="social">
	<tbody>
		<tr>
			<td class="social"  @click="share('android', 'spa', '')">
				<img  class="social" src="@/assets/sites/mc2/images/standard/android.png" />
			</td>

			<td class="social" @click="share('lesson', 'Periodo 1: Preparación: ', '/content/M2/spa/multiply2/multiply2intro1.html')">
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