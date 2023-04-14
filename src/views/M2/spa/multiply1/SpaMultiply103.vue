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
    <div class="nav full internal-link" @click="this.pageGoBack('spa-multiply1-index')">
        <img src="@/assets/sites/mc2/images/ribbons/mc2back.png" class="nav full" />
    </div>
</div>
<div class="page_content ltr">
<div class="block ltr">
                        <div class="chapter_number ltr"><h1>3.</h1></div>
                        <div class="chapter_title ltr"><h1>Caminando en el Espíritu</h1></div>
                    </div>
<div id="showVideoOptions"></div>
  <!-- Lesson 12: Opening Doors-->
<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/images/standard/look-back.png" />
<div class="lesson-subtitle"><span class="back">Mirando hacia atr&aacute;s</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary0" class="summary"><h2 class="back">+ Alabar</h2></div>
<div class="collapsed" id ="Text0">
<!-- end default revealSummary -->

<p class="back"><em>Lee un pasaje de las Escrituras y practiquen un canto de adoraci&oacute;n.</em></p>

<ul>
	<li class="back">Ejemplo: Salmo 66:4 &quot; Toda la tierra te adorar&aacute;, Y cantar&aacute; a ti; Cantar&aacute;n a tu nombre&quot;. Hagamos una pausa y alabemos a Dios con una canci&oacute;n.</li>
</ul>

</div>

<h2 class="back">Cuidado</h2>

<p><em>Ministrar las necesidades de los dem&aacute;s en oraci&oacute;n, consejo b&iacute;blico y &aacute;nimo.</em></p>

<ul class="back">
	<li>Pida a cada persona que comparta un hecho destacado y un desaf&iacute;o que haya experimentado esta semana.</li>
	<li>Pregunta: &quot;&iquest;Qu&eacute; quieres que Jes&uacute;s haga por ti esta semana?&quot; Oren por las necesidades de los dem&aacute;s</li>
</ul>

<h2 class="back">Celebra la fidelidad</h2>

<p><em>Alentar la responsabilidad amorosa de obedecer a Jes&uacute;s</em></p>

<ul class="back">
	<li>Pregunta: &quot;&iquest;Qu&eacute; pas&oacute; cuando confiaste en Dios tus metas y tu declaraci&oacute;n: &ldquo;Yo har&eacute;&hellip;&rdquo;?</li>
</ul>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2 class="back">+ Motivaci&oacute;n y Animo</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p class="back"><em>Proyectar visi&oacute;n de qui&eacute;nes pueden llegar a ser en Cristo o lo que Dios puede hacer a trav&eacute;s de ellos.</em></p>

<p class="back">Ejemplo: Un d&iacute;a una mujer fue a visitar a su vecino. Mientras hablaban, ella comparti&oacute; el Evangelio con su pr&oacute;jimo y puso su fe en Cristo. Pero entonces la mujer se puso a llorar. &quot;Mi esposo acaba de morir hace 2 semanas. &iquest;Por qu&eacute; no me dijiste esto antes?&quot; Como ven, nunca sabemos cu&aacute;ndo ser&aacute; el &uacute;ltimo d&iacute;a de la gente. Es por eso por lo que debemos compartir el Evangelio cuando tenemos la oportunidad.</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/images/standard/look-up.png" />
<div class="lesson-subtitle"><span class="up">Mirando para arriba</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary2" class="summary"><h2 class="up">+ Contexto</h2></div>
<div class="collapsed" id ="Text2">
<!-- end default revealSummary -->

<p class="back">Ejemplo: Un d&iacute;a una mujer fue a visitar a su vecino. Mientras hablaban, ella comparti&oacute; el Evangelio con su pr&oacute;jimo y puso su fe en Cristo. Pero entonces la mujer se puso a llorar. &quot;Mi esposo acaba de morir hace 2 semanas. &iquest;Por qu&eacute; no me dijiste esto antes?&quot; Como ven, nunca sabemos cu&aacute;ndo ser&aacute; el &uacute;ltimo d&iacute;a de la gente. Es por eso por lo que debemos compartir el Evangelio cuando tenemos la oportunidad.</p>

</div>

<h2 class="up">Leer</h2>

<ul>
	<li class="back">Lea &nbsp;<strong>1 Corintios 2:14-33</strong> dos veces mientras todos escuchan</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Lee 1 Corintios 2:14-16</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<div>
<p><sup class="versenum">14&nbsp;</sup>El que no tiene el Esp&iacute;ritu no acepta lo que procede del Esp&iacute;ritu de Dios, pues para &eacute;l es locura. No puede entenderlo, porque hay que discernirlo espiritualmente.<sup class="versenum">15&nbsp;</sup>En cambio, el que es espiritual lo juzga todo, aunque &eacute;l mismo no est&aacute; sujeto al juicio de nadie, porque</p>

<p><sup class="versenum">16&nbsp;</sup>&laquo;&iquest;qui&eacute;n ha conocido la mente del Se&ntilde;or<br />
&nbsp;&nbsp;&nbsp;&nbsp;para que pueda instruirlo?&raquo;</p>


<p>Nosotros, por nuestra parte, tenemos la mente de Cristo.</p>
<!-- end bible -->
</div>
<p class="bible"></p>

</div>

<h2 class="up">Preguntas de Descubrimiento (Todos responden)</h2>

<ul class="up">
	<li>&iquest;Qu&eacute; te llam&oacute; la atenci&oacute;n (o qu&eacute; te gust&oacute; m&aacute;s) y por qu&eacute;?</li>
	<li>&iquest;Qu&eacute; aprendiste acerca de Jes&uacute;s?</li>
	<li>&iquest;Qu&eacute; aprendiste sobre las personas?</li>
	<li>&iquest;C&oacute;mo obedecer&aacute;s a Jes&uacute;s ahora que sabes esto?</li>
</ul>

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


<h2 class="up">Leer, contar y corregir</h2>

<ul class="up">
	<li>Lea la historia de nuevo. P&iacute;dale a alguien que cuente la historia y p&iacute;dale al grupo que corrija si es necesario.</li>
</ul>

<!-- begin default revealSummary -->
<div id="Summary3" class="summary"><h2 class="up">+ Resumen</h2></div>
<div class="collapsed" id ="Text3">
<!-- end default revealSummary -->

<p>Aunque todos los cristianos tienen el Esp&iacute;ritu viviendo en ellos, no todos los cristianos son dirigidos y controlados por el Esp&iacute;ritu. Cuando confiamos en nuestros propios esfuerzos o tomamos el control de nuestras vidas, la Biblia nos llama carnales y no experimentamos una vida abundante o fruct&iacute;fera. Lee <span class="popup-link" @click = "popUp('pop3')"> G&aacute;latas 5:22-24.</span></p>

<div class="popup invisible" id="pop3"><!-- begin bible -->
<p><sup class="versenum">22&nbsp;</sup>En cambio, el fruto del Esp&iacute;ritu es amor, alegr&iacute;a, paz, paciencia, amabilidad, bondad, fidelidad,<sup class="versenum">23&nbsp;</sup>humildad y dominio propio. No hay ley que condene estas cosas.<sup class="versenum">24&nbsp;</sup>Los que son de Cristo Jes&uacute;s han crucificado la naturaleza pecaminosa, con sus pasiones y deseos.</p>
<!-- end bible --></div>

<p>&nbsp;</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/images/standard/look-forward.png" />
<div class="lesson-subtitle"><span class="forward">Mirando hacia adelante</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary4" class="summary"><h2 class="forward">+ Preparaci&oacute;n para la Misi&oacute;n</h2></div>
<div class="collapsed" id ="Text4">
<!-- end default revealSummary -->

<p>Ense&ntilde;ar el principio de respiraci&oacute;n espiritual</p>

<ul class="forward">
	<li>Exhala &ndash; <span class="popup-link" @click = "popUp('pop2')"> 1 Juan 1:9</span>

	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<p><sup class="versenum">9&nbsp;</sup>Si confesamos nuestros pecados, Dios, que es fiel y justo, nos los perdonar&aacute; y nos limpiar&aacute; de toda maldad.</p>
	<!-- end bible --></div>
	confesar nuestros pecados, aceptar cambiar nuestra actitud o acciones</li>
	<li>Inhala &ndash; entregar el control de nuestra vida a Cristo</li>
	<li>P&iacute;dales que oren para ser controlados y dirigidos por el Esp&iacute;ritu Santo</li>
	<li>Padre, te necesito. Reconozco que he estado en control de mi vida; y que he pecado contra ti. Gracias por perdonar mis pecados a trav&eacute;s de la muerte de Cristo en la cruz. Te invito a tomar el control de mi vida y llenarme de tu Esp&iacute;ritu Santo. Oro por esto en el nombre de Jes&uacute;s como una expresi&oacute;n de mi fe. Gracias por tomar el control de mi vida y llenarme de tu Esp&iacute;ritu Santo.</li>
	<li>Practica dibujar los 3 c&iacute;rculos y ense&ntilde;ar el principio de respiraci&oacute;n espiritual</li>
</ul>

</div>

<h2 class="forward">Ir a la Misi&oacute;n</h2>

<ul class="forward">
	<li>Pregunta: &quot;&iquest;A qui&eacute;n le puedes contar lo que has aprendido acerca del Esp&iacute;ritu Santo?&quot; (use la declaraci&oacute;n: &quot;Yo har&eacute;&hellip;&hellip;. cuando&hellip;&rdquo;).</li>
	<li>P&iacute;dales que identifiquen las acciones de fe adicionales que tomar&aacute;n con los dem&aacute;s (use la declaraci&oacute;n: &quot;Yo har&eacute;&hellip;&hellip;. cuando&hellip;&rdquo;)</li>
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


<h2 class="forward">Orando por la Misi&oacute;n</h2>

<ul class="forward">
	<li>Comprometa las metas de todos al Se&ntilde;or. P&iacute;dele al Se&ntilde;or que nos ayude a ser fieles y que nos use para iniciar un movimiento de hacedores de disc&iacute;pulos.</li>
</ul>

<div class="for-enrichment">Para un mayor enriquecimiento: <!-- begin linkInternal capacitor-->
<span id= "Return1" class="internal-link" @click="this.goToPageAndSetReturn('/M2/spa/tc/tc03', '#1')">
    Lee el CT #3: C&oacute;mo puede estar lleno del Esp&iacute;ritu Santo 
</span>
<!-- end linkInternal capacitor-->
.</div>


<!-- begin sdcard languageFooterSingle -->
<!-- begin mc2 sdcard languageFooter -->

<div class="languages" id="languages"><img class="languages" src="@/assets/sites/mc2/images/standard/OtherLanguagesTop.png" /></div>
<table class="social">
	<tbody>
		<tr>
			<td class="social"  @click="share('android', 'spa', '')">
				<img  class="social" src="@/assets/sites/mc2/images/standard/android.png" />
			</td>

			<td class="social" @click="share('lesson', 'Caminando en el Espíritu: ', '/content/M2/spa/multiply1/multiply103.html')">
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