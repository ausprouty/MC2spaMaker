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
                        <div class="chapter_number ltr"><h1>8.</h1></div>
                        <div class="chapter_title ltr"><h1>Pregunta Asombrosa, Cuidado</h1></div>
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
	<li class="back">Ejemplo: <span class="popup-link" @click = "popUp('pop1')"> Salmos 33:1-5</span>

	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<div>
	<div>
	<p><sup class="versenum">1 </sup>Canten al <span class="divine-name small-caps">Se&ntilde;or con alegr&iacute;a, ustedes los justos;<br />
	&nbsp;&nbsp;&nbsp;&nbsp;es propio de los &iacute;ntegros alabar al <span class="divine-name small-caps">Se&ntilde;or.<br />
	<sup class="versenum">2&nbsp;</sup>Alaben al <span class="divine-name small-caps">Se&ntilde;or al son del arpa;<br />
	&nbsp;&nbsp;&nbsp;&nbsp;entonen alabanzas con el decacordio.<br />
	<sup class="versenum">3&nbsp;</sup>C&aacute;ntenle una canci&oacute;n nueva;<br />
	&nbsp;&nbsp;&nbsp;&nbsp;toquen con destreza,<br />
	&nbsp;&nbsp;&nbsp;&nbsp;y den voces de alegr&iacute;a.</span></span></span></p>
	</div>

	<p><sup class="versenum">4&nbsp;</sup>La palabra del <span class="divine-name small-caps">Se&ntilde;or es justa;<br />
	&nbsp;&nbsp;&nbsp;&nbsp;fieles son todas sus obras.<br />
	<sup class="versenum">5&nbsp;</sup>El <span class="divine-name small-caps">Se&ntilde;or ama la justicia y el derecho;<br />
	&nbsp;&nbsp;&nbsp;&nbsp;llena est&aacute; la tierra de su amor.</span></span></p>
	</div>
	<!-- end bible --></div>
	y canten 1 o 2 alabanzas.</li>
</ul>

</div>

<h2 class="back">Cuidado</h2>

<p><em>Ministrar las necesidades de los dem&aacute;s en oraci&oacute;n, consejo b&iacute;blico y &aacute;nimo.</em></p>

<ul class="back">
	<li>Pida a cada persona que comparta un hecho destacado y un desaf&iacute;o que haya experimentado esta semana.</li>
	<li>Pregunta: &quot;&iquest;Qu&eacute; quieres que Jes&uacute;s haga por ti esta semana?&quot; Oren por las necesidades de los dem&aacute;s.</li>
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

<p class="back">Las primeras palabras de Jes&uacute;s en Marcos fueron decirle a la gente que se &quot;arrepientan&quot;. Esto significa cambiar toda nuestra forma de pensar porque los caminos de Dios son muy diferentes de los nuestros. Un &aacute;rea es c&oacute;mo nos vemos a nosotros mismos. Necesitamos una nueva comprensi&oacute;n de la vida con Dios y lo que &Eacute;l puede hacer en nuestras vidas. Las siguientes palabras de Jes&uacute;s fueron: &quot;S&iacute;gueme, y yo os har&eacute; pescadores de hombres&quot;. Cada disc&iacute;pulo de Jes&uacute;s ha sido llamado a vivir este doble llamado a seguirlo y ser pescador de hombres. Nuestro compromiso sacrificial con Jes&uacute;s transforma la vida diaria y todas nuestras relaciones. &iexcl;Anim&eacute;monos unos a otros a arrepentirnos, a seguir y pescar continuamente!</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/images/standard/look-up.png" />
<div class="lesson-subtitle"><span class="up">Mirando para arriba</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary2" class="summary"><h2 class="up">+ Contexto</h2></div>
<div class="collapsed" id ="Text2">
<!-- end default revealSummary -->
<p class="back">Un par de semanas antes de la muerte de Jes&uacute;s, &Eacute;l y Sus seguidores estaban en una ciudad cerca de Jeric&oacute;. Cuando salieron a recorrer los 24 km hasta la monta&ntilde;a hasta Jerusal&eacute;n, un ciego llama a Jes&uacute;s tratando de llamar su atenci&oacute;n. Esta historia nos cuenta lo que sucedi&oacute; despu&eacute;s.</p>

</div>

<h2 class="up">Leer</h2>

<ul>
	<li class="back">Lea o vea <strong>Lucas 18:35-43</strong> dos veces mientras todos escuchan</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Lee Lucas 18:35-43</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>Un mendigo ciego recibe la vista</h3>

<p><sup class="versenum">35&nbsp;</sup>Sucedi&oacute; que al acercarse Jes&uacute;s a Jeric&oacute;, estaba un ciego sentado junto al camino pidiendo limosna.<sup class="versenum">36&nbsp;</sup>Cuando oy&oacute; a la multitud que pasaba, pregunt&oacute; qu&eacute; acontec&iacute;a.</p>

<p><sup class="versenum">37&nbsp;</sup>&mdash;Jes&uacute;s de Nazaret est&aacute; pasando por aqu&iacute; &mdash;le respondieron.</p>

<p><sup class="versenum">38&nbsp;</sup>&mdash;&iexcl;Jes&uacute;s, Hijo de David, ten compasi&oacute;n de m&iacute;! &mdash;grit&oacute; el ciego.</p>

<p><sup class="versenum">39&nbsp;</sup>Los que iban delante lo reprend&iacute;an para que se callara, pero &eacute;l se puso a gritar a&uacute;n m&aacute;s fuerte:</p>

<p>&mdash;&iexcl;Hijo de David, ten compasi&oacute;n de m&iacute;!</p>

<p><sup class="versenum">40&nbsp;</sup>Jes&uacute;s se detuvo y mand&oacute; que se lo trajeran. Cuando el ciego se acerc&oacute;, le pregunt&oacute; Jes&uacute;s:</p>

<p><sup class="versenum">41&nbsp;</sup>&mdash;&iquest;Qu&eacute; quieres que haga por ti?</p>

<p>&mdash;Se&ntilde;or, quiero ver.</p>

<p><sup class="versenum">42&nbsp;</sup>&mdash;&iexcl;Recibe la vista! &mdash;le dijo Jes&uacute;s&mdash;. Tu fe te ha sanado.</p>

<p><sup class="versenum">43&nbsp;</sup>Al instante recobr&oacute; la vista. Entonces, glorificando a Dios, comenz&oacute; a seguir a Jes&uacute;s, y todos los que lo vieron daban alabanza a Dios.</p>
<!-- end bible -->

<p class="bible"></p>

</div>


<button id="MC2/spa/video/multiply1/108.mp4" type="button" class="external-movie">
         Mira &nbsp;Lucas 18:35-43&nbsp;</button>
    <div class="collapsed"></div>

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
<p class="up">&iexcl;Jes&uacute;s tiene una gran compasi&oacute;n por las personas! Le hizo al ciego una pregunta incre&iacute;ble: &quot;&iquest;Qu&eacute; quieres que haga por ti?&quot; Entonces &Eacute;l satisfizo las necesidades del hombre. En Juan 14:12-13 Jes&uacute;s dijo: &quot; El que en m&iacute; cree, las obras que yo hago, &eacute;l las har&aacute; tambi&eacute;n; y aun mayores har&aacute;, porque yo voy al Padre. Y todo lo que pidiereis al Padre en mi nombre, lo har&eacute;, para que el Padre sea glorificado en el Hijo.&quot; Como seguidores de Jes&uacute;s, tomamos la iniciativa de mostrar compasi&oacute;n por las personas en el poder del Esp&iacute;ritu haciendo a las personas la misma Pregunta Asombrosa y satisfaciendo sus necesidades de manera pr&aacute;ctica.</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/images/standard/look-forward.png" />
<div class="lesson-subtitle"><span class="forward">Mirando hacia adelante</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary4" class="summary"><h2 class="forward">+ Preparaci&oacute;n para la Misi&oacute;n</h2></div>
<div class="collapsed" id ="Text4">
<!-- end default revealSummary -->
<ul class="forward">
	<li>Practique contar la historia y usar la Pregunta Asombrosa. Incluya la pr&aacute;ctica de la transici&oacute;n de una conversaci&oacute;n a la historia.</li>
	<li>Opcional: contar la historia usando el segmento de la pel&iacute;cula JESUS</li>
	<li>Actualice su lista Oikos con nuevas personas si es necesario</li>
</ul>

</div>

<h2 class="forward">Ir a la Misi&oacute;n</h2>

<ul class="forward">
	<li>Identifique a 5 personas de su lista Oikos con las que puede orar y cuidar de ellas usando la pregunta asombrosa.</li>
	<li>Escriba declaraciones usando de &quot;Yo har&eacute;&hellip;. cuando&hellip;&rdquo; y que lo compartan con su grupo.</li>
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


<!-- begin sdcard languageFooterSingle -->
<!-- begin mc2 sdcard languageFooter -->

<div class="languages" id="languages"><img class="languages" src="@/assets/sites/mc2/images/standard/OtherLanguagesTop.png" /></div>
<table class="social">
	<tbody>
		<tr>
			<td class="social"  @click="share('android', 'spa', '')">
				<img  class="social" src="@/assets/sites/mc2/images/standard/android.png" />
			</td>

			<td class="social" @click="share('lesson', 'Pregunta Asombrosa, Cuidado: ', '/content/M2/spa/multiply1/multiply108.html')">
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