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
                        <div class="chapter_number ltr"><h1>1.</h1></div>
                        <div class="chapter_title ltr"><h1>Esperanza para los rechazados</h1></div>
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
<em>*No habr&aacute; rendici&oacute;n de cuentas para la lecci&oacute;n 1, ya que es la primera vez que el grupo se re&uacute;ne.</em></div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/images/standard/look-up.png" />
<div class="lesson-subtitle"><span class="up">Mirando para arriba</span></div>
</div>

<h2>Descubrir la Biblia juntos</h2>

<h2>Contexto</h2>

<button id="MC2/spa/video/hope/01-100.mp4" type="button" class="external-movie">
         Mira &nbsp;Contexto de la historia&nbsp; en línea</button>
    <div class="collapsed"></div>

<h2>Leer</h2>

<ul>
	<li>Leer Lucas 7:36-50&nbsp;mientras los dem&aacute;s escuchan o ver el video,&nbsp;dos veces.</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Lee Lucas 7:36-50</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>Una mujer pecadora unge a Jes&uacute;s</h3>

<p><sup class="versenum">36&nbsp;</sup>Uno de los fariseos invit&oacute; a Jes&uacute;s a comer, as&iacute; que fue a la casa del fariseo y se sent&oacute; a la mesa.<sup class="versenum">37&nbsp;</sup>Ahora bien, viv&iacute;a en aquel pueblo una mujer que ten&iacute;a fama de pecadora. Cuando ella se enter&oacute; de que Jes&uacute;s estaba comiendo en casa del fariseo, se present&oacute; con un frasco de alabastro lleno de perfume.<sup class="versenum">38&nbsp;</sup>Llorando, se arroj&oacute; a los pies de Jes&uacute;s, de manera que se los ba&ntilde;aba en l&aacute;grimas. Luego se los sec&oacute; con los cabellos; tambi&eacute;n se los besaba y se los ung&iacute;a con el perfume.</p>

<p><sup class="versenum">39&nbsp;</sup>Al ver esto, el fariseo que lo hab&iacute;a invitado dijo para s&iacute;: &laquo;Si este hombre fuera profeta, sabr&iacute;a qui&eacute;n es la que lo est&aacute; tocando, y qu&eacute; clase de mujer es: una pecadora&raquo;.</p>

<p><sup class="versenum">40&nbsp;</sup>Entonces Jes&uacute;s le dijo a manera de respuesta:</p>

<p>&mdash;Sim&oacute;n, tengo algo que decirte.</p>

<p>&mdash;Dime, Maestro &mdash;respondi&oacute;.</p>

<p><sup class="versenum">41&nbsp;</sup>&mdash;Dos hombres le deb&iacute;an dinero a cierto prestamista. Uno le deb&iacute;a quinientas monedas de plata, y el otro cincuenta.<sup class="versenum">42&nbsp;</sup>Como no ten&iacute;an con qu&eacute; pagarle, les perdon&oacute; la deuda a los dos. Ahora bien, &iquest;cu&aacute;l de los dos lo amar&aacute; m&aacute;s?</p>

<p><sup class="versenum">43&nbsp;</sup>&mdash;Supongo que aquel a quien m&aacute;s le perdon&oacute; &mdash;contest&oacute; Sim&oacute;n.</p>

<p>&mdash;Has juzgado bien &mdash;le dijo Jes&uacute;s.</p>

<p><sup class="versenum">44&nbsp;</sup>Luego se volvi&oacute; hacia la mujer y le dijo a Sim&oacute;n:</p>

<p>&mdash;&iquest;Ves a esta mujer? Cuando entr&eacute; en tu casa, no me diste agua para los pies, pero ella me ha ba&ntilde;ado los pies en l&aacute;grimas y me los ha secado con sus cabellos.<sup class="versenum">45&nbsp;</sup>T&uacute; no me besaste, pero ella, desde que entr&eacute;, no ha dejado de besarme los pies.<sup class="versenum">46&nbsp;</sup>T&uacute; no me ungiste la cabeza con aceite, pero ella me ungi&oacute; los pies con perfume.<sup class="versenum">47&nbsp;</sup>Por esto te digo: si ella ha amado mucho, es que sus muchos pecados le han sido perdonados. Pero a quien poco se le perdona, poco ama.</p>

<p><sup class="versenum">48&nbsp;</sup>Entonces le dijo Jes&uacute;s a ella:</p>

<p>&mdash;Tus pecados quedan perdonados.</p>

<p><sup class="versenum">49&nbsp;</sup>Los otros invitados comenzaron a decir entre s&iacute;: &laquo;&iquest;Qui&eacute;n es este, que hasta perdona pecados?&raquo;</p>

<p><sup class="versenum">50&nbsp;</sup>&mdash;Tu fe te ha salvado &mdash;le dijo Jes&uacute;s a la mujer&mdash;; vete en paz.</p>
<!-- end bible -->

<p class="bible"></p>

</div>

<button id="MC2/spa/video/hope/01.mp4" type="button" class="external-movie">
         Mira &nbsp;Lucas 7:36-50&nbsp;</button>
    <div class="collapsed"></div>

<h2>Preguntas de descubrimiento</h2>

<ul>
	<li>&iquest;Qu&eacute; te ha llamado la atenci&oacute;n (o qu&eacute; te ha gustado m&aacute;s) y por qu&eacute;?</li>
	<li>&iquest;Qu&eacute; aprendemos acerca de Jes&uacute;s?</li>
	<li>&iquest;Qu&eacute; aprendemos de las personas?</li>
	<li>&iquest;Con que personaje de la historia&nbsp;te identificas m&aacute;s y por qu&eacute;?</li>
	<li>&iquest;Qu&eacute; le impide hoy seguir a Jes&uacute;s?</li>
</ul>

<!-- begin default revealSummary -->
<div id="Summary0" class="summary"><h2>+ Resumen</h2></div>
<div class="collapsed" id ="Text0">
<!-- end default revealSummary -->

<p>Jes&uacute;s acepta a la mujer pero el fariseo la rechaza a la&nbsp;y quiere echarla. Jes&uacute;s cuenta una historia para ayudar al fariseo a entender sobre el perd&oacute;n y utiliza el acto de la mujer como ejemplo&nbsp;de alguien que experimenta el perd&oacute;n. Luego le habla a la mujer dici&eacute;ndole que sus pecados son perdonados.</p>

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


<p>&nbsp;</p>

<p><img class="lesson-icon" src="@/assets/sites/mc2/images/standard/look-forward.png" /></p>

<div class="lesson-subtitle"><span class="forward">Mirando hacia adelante</span></div>
</div>

<h2>Practicar&nbsp;</h2>

<ul>
	<li>Formen parejas y practiquen contando la historia unos con otros</li>
</ul>

<h2>Elijan algo para obedecer juntos</h2>

<ul>
	<li>&iquest;C&oacute;mo podemos aplicar esta ense&ntilde;anza?</li>
	<li>&iquest;Hay alguien a quien podamos servir de forma sencilla&nbsp;esta semana?</li>
	<li>&iquest;A qui&eacute;n puedes contarle esta historia en esta semana?</li>
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

			<td class="social" @click="share('lesson', 'Esperanza para los rechazados: ', '/content/M2/spa/hope/hope01.html')">
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