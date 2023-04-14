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
                        <div class="chapter_number ltr"><h1>3.</h1></div>
                        <div class="chapter_title ltr"><h1>La Esperanza cambia las cosas</h1></div>
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

<h2>Celebre la fidelidad</h2>

<ul>
	<li>&iquest;De qu&eacute; manera obedeciste a Jes&uacute;s la semana pasada?</li>
	<li>&iquest;Con qui&eacute;n compartiste la historia de la semana pasada?</li>
</ul>

<h2>Motivaci&oacute;n y &aacute;nimo</h2>

<ul>
	<li>An&iacute;mense mutuamente a seguir obedeciendo a Jes&uacute;s y recu&eacute;rdense la importancia de compartir las historias con los dem&aacute;s.</li>
</ul>
</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/images/standard/look-up.png" />
<div class="lesson-subtitle"><span class="up">Mirando para arriba</span></div>
</div>

<h2>Descubrir la Biblia juntos</h2>

<h2>Contexto</h2>


<button id="MC2/spa/video/hope/03-100.mp4" type="button" class="external-movie">
         Mira &nbsp;Contexto de la historia&nbsp; en línea</button>
    <div class="collapsed"></div>

<h2>Leer:</h2>

<ul>
	<li>Leer Lucas 19:1-10&nbsp;mientras los dem&aacute;s escuchan&nbsp;o ver el video,&nbsp;dos veces.</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Lee Lucas 19:1-10</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>Zaqueo, el recaudador de impuestos</h3>

<p><sup class="versenum">1 </sup>Jes&uacute;s lleg&oacute; a Jeric&oacute; y comenz&oacute; a cruzar la ciudad.<sup class="versenum">2&nbsp;</sup>Resulta que hab&iacute;a all&iacute; un hombre llamado Zaqueo, jefe de los recaudadores de impuestos, que era muy rico.<sup class="versenum">3&nbsp;</sup>Estaba tratando de ver qui&eacute;n era Jes&uacute;s, pero la multitud se lo imped&iacute;a, pues era de baja estatura.<sup class="versenum">4&nbsp;</sup>Por eso se adelant&oacute; corriendo y se subi&oacute; a un &aacute;rbol sic&oacute;moro para poder verlo, ya que Jes&uacute;s iba a pasar por all&iacute;.</p>

<p><sup class="versenum">5&nbsp;</sup>Llegando al lugar, Jes&uacute;s mir&oacute; hacia arriba y le dijo:</p>

<p>&mdash;Zaqueo, baja en seguida. Tengo que quedarme hoy en tu casa.</p>

<p><sup class="versenum">6&nbsp;</sup>As&iacute; que se apresur&oacute; a bajar y, muy contento, recibi&oacute; a Jes&uacute;s en su casa.</p>

<p><sup class="versenum">7&nbsp;</sup>Al ver esto, todos empezaron a murmurar: &laquo;Ha ido a hospedarse con un pecador&raquo;.</p>

<p><sup class="versenum">8&nbsp;</sup>Pero Zaqueo dijo resueltamente:</p>

<p>&mdash;Mira, Se&ntilde;or: Ahora mismo voy a dar a los pobres la mitad de mis bienes y, si en algo he defraudado a alguien, le devolver&eacute; cuatro veces la cantidad que sea.</p>

<p><sup class="versenum">9&nbsp;</sup>&mdash;Hoy ha llegado la salvaci&oacute;n a esta casa &mdash;le dijo Jes&uacute;s&mdash;, ya que este tambi&eacute;n es hijo de Abraham.<sup class="versenum">10&nbsp;</sup>Porque el Hijo del hombre vino a buscar y a salvar lo que se hab&iacute;a perdido.</p>
<!-- end bible -->

<p class="bible"></p>

</div>


<button id="MC2/spa/video/hope/03.mp4" type="button" class="external-movie">
         Mira &nbsp;Lucas 19:1-10&nbsp;</button>
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

<p>Zaqueo sent&iacute;a curiosidad por Jes&uacute;s. Quer&iacute;a saber m&aacute;s. Jes&uacute;s lo acept&oacute; y fue a su casa a comer y a conversar. Zaqueo ten&iacute;a la esperanza de ser una persona diferente. Esta esperanza y su confianza en Jes&uacute;s hicieron que su vida cambiara. Devolvi&oacute; el dinero a los que hab&iacute;a maltratado corruptamente. Mostr&oacute; las evidencias de una vida cambiada</p>
</div>

<ul>
</ul>

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

<h2>Practicar</h2>

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

			<td class="social" @click="share('lesson', 'La Esperanza cambia las cosas: ', '/content/M2/spa/hope/hope03.html')">
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