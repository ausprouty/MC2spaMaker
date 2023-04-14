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
<h1>Período 5: Multiplicación del liderazgo</h1>
<div id="showVideoOptions"></div>
  <p style="text-align:justify">   
    <div class="zoom-image">
    <vue-image-zoomer
    regular="/images/zoom/sites/mc2/content/M2/spa/images/custom/Period5.png" 
    zoom="/images/zoom/sites/mc2/content/M2/spa/images/custom/Period5.png" :zoom-amount="3" img-class="img-fluid" alt="">
    <img src="@/assets/sites/mc2/content/M2/spa/images/custom/Period5.png" img-class="img-fluid" />
    </vue-image-zoomer>
    </div></p>

<p style="text-align:justify"><span><span>Alrededor de finales del 28 d.C &ndash; primavera del 30 d.C&nbsp;</span></span><span><span>Multiplicaci&oacute;n del movimiento: seleccionando y desarrollando nuevos l&iacute;deres con esp&iacute;ritu de oraci&oacute;n, enviando multiplicadores probados para continuar como l&iacute;deres de construcci&oacute;n de movimiento</span></span></p>

<p class="nobreak-final-final" style="text-align:justify"><span><span>Este per&iacute;odo dura unos 15 meses y comienza con el nombramiento de los Doce como Ap&oacute;stoles.&nbsp; Los Ap&oacute;stoles se convierten en &ldquo;l&iacute;deres en entrenamiento&rdquo; dentro del grupo m&aacute;s grande de obreros del ministerio.&nbsp;&nbsp; Todav&iacute;a hay un grupo m&aacute;s grande de seguidores y buscadores (<span class="popup-link" @click = "popUp('pop1')"> Lucas 6:12-19</span>).&nbsp;</span></span></p>

<div class="popup invisible" id="pop1"><!-- begin bible -->
<h3>Los doce ap&oacute;stoles</h3>

<p><sup class="versenum">12&nbsp;</sup>Por aquel tiempo se fue Jes&uacute;s a la monta&ntilde;a a orar, y pas&oacute; toda la noche en oraci&oacute;n a Dios.<sup class="versenum">13&nbsp;</sup>Al llegar la ma&ntilde;ana, llam&oacute; a sus disc&iacute;pulos y escogi&oacute; a doce de ellos, a los que nombr&oacute; ap&oacute;stoles:<sup class="versenum">14&nbsp;</sup>Sim&oacute;n (a quien llam&oacute; Pedro), su hermano Andr&eacute;s, Jacobo, Juan, Felipe, Bartolom&eacute;,<sup class="versenum">15&nbsp;</sup>Mateo, Tom&aacute;s, Jacobo hijo de Alfeo, Sim&oacute;n, al que llamaban el Zelote,<sup class="versenum">16&nbsp;</sup>Judas hijo de Jacobo, y Judas Iscariote, que lleg&oacute; a ser el traidor.</p>

<p><sup class="versenum">17&nbsp;</sup>Luego baj&oacute; con ellos y se detuvo en un llano. Hab&iacute;a all&iacute; una gran multitud de sus disc&iacute;pulos y mucha gente de toda Judea, de Jerusal&eacute;n y de la costa de Tiro y Sid&oacute;n,<sup class="versenum">18&nbsp;</sup>que hab&iacute;an llegado para o&iacute;rlo y para que los sanara de sus enfermedades. Los que eran atormentados por esp&iacute;ritus malignos quedaban liberados;<sup class="versenum">19&nbsp;</sup>as&iacute; que toda la gente procuraba tocarlo, porque de &eacute;l sal&iacute;a poder que sanaba a todos.</p>
<!-- end bible --></div>

<p>Los Doce son el fruto de la selecci&oacute;n deliberada, el nombramiento, la formaci&oacute;n y la inversi&oacute;n personal de Jes&uacute;s.&nbsp; Esto se demuestra a&uacute;n m&aacute;s despu&eacute;s de Pentecost&eacute;s a trav&eacute;s de la expansi&oacute;n del Reino capturada en el Libro de los Hechos.&nbsp;</p>

<p style="text-align:justify"><span><span>M&aacute;s tarde en este periodo, Jes&uacute;s envi&oacute; a otros 72&nbsp;(<span class="popup-link" @click = "popUp('pop2')"> Lucas 10:1</span>).&nbsp;</span></span></p>

<div class="popup invisible" id="pop2"><!-- begin bible -->
<p><sup class="versenum">1 </sup>Despu&eacute;s de esto, el Se&ntilde;or escogi&oacute; a otros setenta y dos para enviarlos de dos en dos delante de &eacute;l a todo pueblo y lugar adonde &eacute;l pensaba ir.</p>
<!-- end bible --></div>

<p>A pesar de que no se les dio el mismo estatus de liderazgo formal dentro del registro del Evangelio que los Doce, tambi&eacute;n fueron comisionados como &quot;ap&oacute;stoles&quot; (es decir, los enviados).&nbsp; Vemos la multiplicaci&oacute;n incorporada de l&iacute;deres a medida que se le orden&oacute; a este nuevo grupo orar por la pr&oacute;xima generaci&oacute;n de obreros que ser&iacute;an levantados a trav&eacute;s de su trabajo (<span class="popup-link" @click = "popUp('pop3')"> Lucas 10:2</span>).&nbsp;</p>

<div class="popup invisible" id="pop3"><!-- begin bible -->
<p><sup class="versenum">2&nbsp;</sup>&laquo;Es abundante la cosecha &mdash;les dijo&mdash;, pero son pocos los obreros. P&iacute;danle, por tanto, al Se&ntilde;or de la cosecha que mande obreros a su campo.</p>
<!-- end bible --></div>

<p>Sin duda, muchos de estos 72&nbsp;misioneros sin nombre estaban presentes en la iglesia primitiva, entre los 120 en el cuarto superior e incluidos entre las 500 personas a las que Jes&uacute;s se apareci&oacute; despu&eacute;s de Su resurrecci&oacute;n (<span class="popup-link" @click = "popUp('pop4')"> 1 Corintios 15:6</span>).&nbsp;</p>

<div class="popup invisible" id="pop4"><!-- begin bible -->
<p><sup class="versenum">6&nbsp;</sup>Despu&eacute;s se apareci&oacute; a m&aacute;s de quinientos hermanos a la vez, la mayor&iacute;a de los cuales vive todav&iacute;a, aunque algunos han muerto.</p>
<!-- end bible --></div>


<!-- begin sdcard languageFooterSingle -->
<!-- begin mc2 sdcard languageFooter -->

<div class="languages" id="languages"><img class="languages" src="@/assets/sites/mc2/images/standard/OtherLanguagesTop.png" /></div>
<table class="social">
	<tbody>
		<tr>
			<td class="social"  @click="share('android', 'spa', '')">
				<img  class="social" src="@/assets/sites/mc2/images/standard/android.png" />
			</td>

			<td class="social" @click="share('lesson', 'Período 5: Multiplicación del liderazgo: ', '/content/M2/spa/multiply2/multiply2intro5.html')">
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