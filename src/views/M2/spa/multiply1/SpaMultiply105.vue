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
                        <div class="chapter_number ltr"><h1>5.</h1></div>
                        <div class="chapter_title ltr"><h1>Creciendo a través de la Palabra de Dios</h1></div>
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
<p class="back"><em>Lee un pasaje de las Escrituras para comenzar a sentar las bases de la adoraci&oacute;n y la alabanza.</em></p>

<ul>
	<li class="back">Ejemplo: Lea Apocalipsis 7:12 &quot;cantando: &laquo;&iexcl;Am&eacute;n! &iexcl;La bendici&oacute;n y la gloria y la sabidur&iacute;a y la acci&oacute;n de gracias y el honor y el poder y la fuerza pertenecen a nuestro Dios por siempre y para siempre! Am&eacute;n&raquo;</li>
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

<p class="back">Ejemplo: Dios nos ha dado cada bendici&oacute;n espiritual a trav&eacute;s de Jes&uacute;s. &Eacute;l nos ha adoptado en Su familia y nos llama Sus hijos. &quot;En &eacute;l tambi&eacute;n ustedes, cuando oyeron el mensaje de la verdad, el evangelio que les trajo la salvaci&oacute;n, y lo creyeron, fueron marcados con el sello que es el Esp&iacute;ritu Santo prometido. Este garantiza nuestra herencia.&quot; (Efesios 1: 13-14a) &iexcl;Qu&eacute; regalo tan incre&iacute;ble! Esta es la promesa de Dios para ti.</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/images/standard/look-up.png" />
<div class="lesson-subtitle"><span class="up">Mirando para arriba</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary2" class="summary"><h2 class="up">+ Contexto</h2></div>
<div class="collapsed" id ="Text2">
<!-- end default revealSummary -->
<p class="back">Despu&eacute;s de la resurrecci&oacute;n de Jes&uacute;s, Se apareci&oacute; a Sus disc&iacute;pulos muchas veces durante un per&iacute;odo de 40 d&iacute;as. Una de las veces que apareci&oacute; mientras se reun&iacute;an en una sala grande y explic&oacute; la importancia de Su Palabra.</p>

</div>

<h2 class="up">Leer</h2>

<ul>
	<li class="back">Lea o vea <strong>Lucas 24:36-49</strong> dos veces mientras todos escuchan</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Lee Lucas 24:36-49</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>Jes&uacute;s se aparece a los disc&iacute;pulos</h3>

<p><sup class="versenum">36&nbsp;</sup>Todav&iacute;a estaban ellos hablando acerca de esto, cuando Jes&uacute;s mismo se puso en medio de ellos y les dijo:</p>

<p>&mdash;Paz a ustedes.</p>

<p><sup class="versenum">37&nbsp;</sup>Aterrorizados, creyeron que ve&iacute;an a un esp&iacute;ritu.</p>

<p><sup class="versenum">38&nbsp;</sup>&mdash;&iquest;Por qu&eacute; se asustan tanto? &mdash;les pregunt&oacute;&mdash;. &iquest;Por qu&eacute; les vienen dudas?<sup class="versenum">39&nbsp;</sup>Miren mis manos y mis pies. &iexcl;Soy yo mismo! T&oacute;quenme y vean; un esp&iacute;ritu no tiene carne ni huesos, como ven que los tengo yo.</p>

<p><sup class="versenum">40&nbsp;</sup>Dicho esto, les mostr&oacute; las manos y los pies.<sup class="versenum">41&nbsp;</sup>Como ellos no acababan de creerlo a causa de la alegr&iacute;a y del asombro, les pregunt&oacute;:</p>

<p>&mdash;&iquest;Tienen aqu&iacute; algo de comer?</p>

<p><sup class="versenum">42&nbsp;</sup>Le dieron un pedazo de pescado asado,<sup class="versenum">43&nbsp;</sup>as&iacute; que lo tom&oacute; y se lo comi&oacute; delante de ellos. Luego les dijo:</p>

<p><sup class="versenum">44&nbsp;</sup>&mdash;Cuando todav&iacute;a estaba yo con ustedes, les dec&iacute;a que ten&iacute;a que cumplirse todo lo que est&aacute; escrito acerca de m&iacute; en la ley de Mois&eacute;s, en los profetas y en los salmos.</p>

<p><sup class="versenum">45&nbsp;</sup>Entonces les abri&oacute; el entendimiento para que comprendieran las Escrituras.</p>

<p><sup class="versenum">46&nbsp;</sup>&mdash;Esto es lo que est&aacute; escrito &mdash;les explic&oacute;&mdash;: que el Cristo padecer&aacute; y resucitar&aacute; al tercer d&iacute;a,<sup class="versenum">47&nbsp;</sup>y en su nombre se predicar&aacute;n el arrepentimiento y el perd&oacute;n de pecados a todas las naciones, comenzando por Jerusal&eacute;n.<sup class="versenum">48&nbsp;</sup>Ustedes son testigos de estas cosas.<sup class="versenum">49&nbsp;</sup>Ahora voy a enviarles lo que ha prometido mi Padre; pero ustedes qu&eacute;dense en la ciudad hasta que sean revestidos del poder de lo alto.</p>
<!-- end bible -->

<p class="bible"></p>

</div>


<button id="MC2/spa/video/multiply1/105.mp4" type="button" class="external-movie">
         Mira &nbsp;Lucas 24:36-49&nbsp;</button>
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
<p class="up">Jes&uacute;s quiere que entendamos la Palabra de Dios y lo que nos ense&ntilde;a acerca de &Eacute;l. La vida de Jes&uacute;s cumpli&oacute; las promesas en la Palabra de Dios. &Eacute;l quiere que le digamos a los dem&aacute;s acerca de lo que aprendemos.</p>

<ul>
	<li class="nobreak-final-final">Lee <span class="popup-link" @click = "popUp('pop1')"> 2 Timoteo 3:16-17</span>,&nbsp;

	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">16&nbsp;</sup>Toda la Escritura es inspirada por Dios y &uacute;til para ense&ntilde;ar, para reprender, para corregir y para instruir en la justicia,<sup class="versenum">17&nbsp;</sup>a fin de que el siervo de Dios est&eacute; enteramente capacitado para toda buena obra.</p>
	<!-- end bible --></div>
	<span class="popup-link" @click = "popUp('pop2')"> Romanos 10:17</span>

	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<p><sup class="versenum">17&nbsp;</sup>As&iacute; que la fe viene como resultado de o&iacute;r el mensaje, y el mensaje que se oye es la palabra de Cristo.</p>
	<!-- end bible --></div>
	y <span class="popup-link" @click = "popUp('pop3')"> Hebreos 4:12 </span>

	<div class="popup invisible" id="pop3"><!-- begin bible -->
	<p><sup class="versenum">12&nbsp;</sup>Ciertamente, la palabra de Dios es viva y poderosa, y m&aacute;s cortante que cualquier espada de dos filos. Penetra hasta lo m&aacute;s profundo del alma y del esp&iacute;ritu, hasta la m&eacute;dula de los huesos, y juzga los pensamientos y las intenciones del coraz&oacute;n.</p>
	<!-- end bible --></div>
	para resaltar las verdades acerca de la Palabra de Dios.</li>
</ul>

<p class="up">Leer la Biblia cada d&iacute;a es una parte importante de conocer a Jes&uacute;s.</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/images/standard/look-forward.png" />
<div class="lesson-subtitle"><span class="forward">Mirando hacia adelante</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary4" class="summary"><h2 class="forward">+ Preparaci&oacute;n para la Misi&oacute;n</h2></div>
<div class="collapsed" id ="Text4">
<!-- end default revealSummary -->
<ul class="forward">
	<li>Comprom&eacute;tete a leer al menos un cap&iacute;tulo de la Palabra de Dios cada d&iacute;a, comenzando con el Evangelio de Juan.</li>
	<li>Ora para que el Esp&iacute;ritu Santo te ense&ntilde;e a trav&eacute;s de Su Palabra, lee el cap&iacute;tulo y luego responde tres preguntas:
	<ul>
		<li>&iquest;De qu&eacute; trata este pasaje?</li>
		<li>&iquest;C&oacute;mo puedo aplicarlo?</li>
		<li>&iquest;A qui&eacute;n puedo ayudar usando este pasaje?</li>
	</ul>
	</li>
	<li>Medita en lo que el Esp&iacute;ritu Santo ha ense&ntilde;ado acerca del significado de este pasaje.</li>
</ul>

</div>

<h2 class="forward">Ir a la Misi&oacute;n</h2>

<ul class="forward">
	<li>Identifica a 5 personas de tu Lista Oikos a las que les que contar&aacute;s la historia o compartir&aacute;s el Evangelio esta semana.</li>
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

			<td class="social" @click="share('lesson', 'Creciendo a través de la Palabra de Dios: ', '/content/M2/spa/multiply1/multiply105.html')">
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