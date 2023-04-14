<script>
import SQLiteService from '@/services/SQLiteService.js'
import { useFindSummaries, useFindCollapsible, usePopUp} from "@/assets/javascript/revealText.js"
import { useRevealMedia } from "@/assets/javascript/revealMedia.js"
import { useShare} from "@/assets/javascript/share.js"


export default {
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
    localStorage.setItem("lastpage", this.$route.name)
    useFindSummaries()
    useFindCollapsible()
    useRevealMedia()
    await SQLiteService.notes(this.$route.name)
  },
}
</script>
<template>
  <div id="nav">
    <div class="nav full internal-link" @click="this.pageGoBack('spa-hope-index')">
        <img src="@/assets/sites/mc2/images/ribbons/mc2back.png" class="nav full" />
    </div>
</div>
<div class="page_content ltr">
<div class="block ltr">
                        <div class="chapter_number ltr"><h1>2.</h1></div>
                        <div class="chapter_title ltr"><h1>Esperanza para los no religiosos</h1></div>
                    </div>
<div id="showVideoOptions"></div>
  <div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/images/standard/look-back.png" />
<div class="lesson-subtitle"><span class="back">Mirando hacia atr&aacute;s</span></div>
</div>

<div>
<h2>Cuidando los unos de los otros</h2>

<ul>
	<li>&iquest;Qu&eacute; ha sido lo m&aacute;s destacado de esta semana?</li>
	<li>&iquest;Qu&eacute; ha sido un desaf&iacute;o para ti esta semana?</li>
	<li>&iquest;Qu&eacute; quieres que haga Jes&uacute;s por ti esta semana?</li>
	<li>Ora brevemente para que Jes&uacute;s supla las necesidades que han sido compartidas.</li>
</ul>

<h2>Celebre la fidellidad</h2>

<ul>
	<li>&iquest;De qu&eacute; manera obedeciste a Jes&uacute;s la semana pasada?</li>
	<li>&iquest;Con qui&eacute;n compartiste la historia de la semana pasada?</li>
</ul>

<h2>Motivaci&oacute;n y &aacute;nimo:</h2>

<ul>
	<li>An&iacute;mense mutuamente a seguir obedeciendo a Jes&uacute;s y recu&eacute;rdense la importancia de compartir las historias con los dem&aacute;s.</li>
</ul>
</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/images/standard/look-up.png" />
<div class="lesson-subtitle"><span class="up">Mirando para arriba</span></div>
</div>

<h2>Descubrir la Biblia juntos</h2>

<h2>Contexto</h2>


<button id="MC2/spa/video/hope/02-100.mp4" type="button" class="external-movie">
         Mira &nbsp;Contexto de la historia&nbsp; en línea</button>
    <div class="collapsed"></div>

<h2>Leer</h2>

<ul>
	<li>Leer Lucas 18:9-17&nbsp;o ver el video,&nbsp;dos veces mientras los dem&aacute;s escuchan.</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Lee Lucas 18:9-17</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>Par&aacute;bola del fariseo y del recaudador de impuestos</h3>

<p><sup class="versenum">9&nbsp;</sup>A algunos que, confiando en s&iacute; mismos, se cre&iacute;an justos y que despreciaban a los dem&aacute;s, Jes&uacute;s les cont&oacute; esta par&aacute;bola:<sup class="versenum">10&nbsp;</sup>&laquo;Dos hombres subieron al templo a orar; uno era fariseo, y el otro, recaudador de impuestos.<sup class="versenum">11&nbsp;</sup>El fariseo se puso a orar consigo mismo: &ldquo;Oh Dios, te doy gracias porque no soy como otros hombres &mdash;ladrones, malhechores, ad&uacute;lteros&mdash; ni mucho menos como ese recaudador de impuestos.<sup class="versenum">12&nbsp;</sup>Ayuno dos veces a la semana y doy la d&eacute;cima parte de todo lo que recibo&rdquo;.<sup class="versenum">13&nbsp;</sup>En cambio, el recaudador de impuestos, que se hab&iacute;a quedado a cierta distancia, ni siquiera se atrev&iacute;a a alzar la vista al cielo, sino que se golpeaba el pecho y dec&iacute;a: &ldquo;&iexcl;Oh Dios, ten compasi&oacute;n de m&iacute;, que soy pecador!&rdquo;</p>

<p><sup class="versenum">14&nbsp;</sup>&raquo;Les digo que este, y no aquel, volvi&oacute; a su casa justificado ante Dios. Pues todo el que a s&iacute; mismo se enaltece ser&aacute; humillado, y el que se humilla ser&aacute; enaltecido&raquo;.</p>

<h3>Jes&uacute;s y los ni&ntilde;os</h3>

<p><sup class="versenum">15&nbsp;</sup>Tambi&eacute;n le llevaban ni&ntilde;os peque&ntilde;os a Jes&uacute;s para que los tocara. Al ver esto, los disc&iacute;pulos reprend&iacute;an a quienes los llevaban.<sup class="versenum">16&nbsp;</sup>Pero Jes&uacute;s llam&oacute; a los ni&ntilde;os y dijo: &laquo;Dejen que los ni&ntilde;os vengan a m&iacute;, y no se lo impidan, porque el reino de Dios es de quienes son como ellos.<sup class="versenum">17&nbsp;</sup>Les aseguro que el que no reciba el reino de Dios como un ni&ntilde;o, de ninguna manera entrar&aacute; en &eacute;l&raquo;.</p>
<!-- end bible -->

<p class="bible"></p>

</div>


<button id="MC2/spa/video/hope/02.mp4" type="button" class="external-movie">
         Mira &nbsp;Lucas 18:9-17&nbsp;</button>
    <div class="collapsed"></div>

<h2>Preguntas de descubrimiento</h2>

<ul>
	<li>&iquest;Qu&eacute; te ha llamado la atenci&oacute;n (o qu&eacute; te ha gustado m&aacute;s) y por qu&eacute;?</li>
	<li>&iquest;Qu&eacute; aprendemos acerca de Jes&uacute;s?</li>
	<li>&iquest;Qu&eacute; aprendemos de las personas?</li>
	<li>&iquest;Con que personaje de la historia&nbsp;te identificas m&aacute;s y por qu&eacute;?</li>
	<li>&iquest;Qu&eacute; le impide hoy seguir a Jes&uacute;s?</li>
</ul>

<h2>Lea, Cuente y Corrija</h2>

<ul>
	<li>Vuelve a leer la historia. Pide a alguien que cuente la historia en sus propias palabras. El grupo puede ayudar si es necesario.</li>
</ul>

<!-- begin default revealSummary -->
<div id="Summary0" class="summary"><h2>+ Resumen</h2></div>
<div class="collapsed" id ="Text0">
<!-- end default revealSummary -->

<p>El fariseo fue reprendido por Jes&uacute;s porque su actitud no era humilde y arrepentida. El recaudador de impuestos en cambio fue justificado por Jes&uacute;s por su actitud humilde. Jes&uacute;s dice que incluso una persona no religiosa como el recaudador de impuestos puede ser justificada ante Dios mediante una actitud humilde. Debemos reconocer que somos personas pecadoras y humillarnos ante Dios como el recaudador de impuestos</p>

</div>

<div class="lesson">
<!-- begin note capacitor-->
<div class="note-area">
    <form class="auto_submit_item">
      <textarea
        class="textarea resize-ta"
        @keyup="this.addNote('note1Text')"
        id="note1Text"
      ></textarea>
    </form>
</div>
<!-- end note capacitor -->


<p><img class="lesson-icon" src="@/assets/sites/mc2/images/standard/look-forward.png" /></p>

<div class="lesson-subtitle"><span class="forward">Mirando hacia adelante</span></div>
</div>

<h2>Practicar:</h2>

<ul>
	<li>Formen parejas y practiquen contando la historia unos con otros</li>
</ul>

<h2>Elijan juntos algo para obedecer</h2>

<ul>
	<li>&iquest;C&oacute;mo podemos aplicar esta ense&ntilde;anza?</li>
	<li>&iquest;Hay alguien a quien podamos servir de forma sencilla esta semana?</li>
	<li>&iquest;Hay alguien en tu vida que crees que necesita escuchar esta historia?</li>
</ul>

<!-- begin note capacitor-->
<div class="note-area">
    <form class="auto_submit_item">
      <textarea
        class="textarea resize-ta"
        @keyup="this.addNote('note2Text')"
        id="note2Text"
      ></textarea>
    </form>
</div>
<!-- end note capacitor -->


<h2>Oren</h2>

<ul>
	<li>Den&nbsp;gracias a Dios por el tiempo que han pasado juntos y p&iacute;danle que les ayude a conocerle mejor.</li>
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

			<td class="social" @click="share('lesson', 'Esperanza para los no religiosos: ', '/content/M2/spa/hope/hope02.html')">
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