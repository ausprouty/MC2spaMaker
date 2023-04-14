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
    <div class="nav full internal-link" @click="this.pageGoBack('spa-multiply2-index')">
        <img src="@/assets/sites/mc2/images/ribbons/mc2back.png" class="nav full" />
    </div>
</div>
<div class="page_content ltr">
<div class="block ltr">
                        <div class="chapter_number ltr"><h1>11.</h1></div>
                        <div class="chapter_title ltr"><h1>Una búsqueda nocturna</h1></div>
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
	<li class="nobreak-final-final">(Opcional) Jesucristo es el Se&ntilde;or, para la gloria de Dios Padre. &Eacute;l quiere que todos los hombres sean salvos y lleguen al conocimiento de la verdad. Porque hay un solo Dios y un mediador tambi&eacute;n entre Dios y el hombre, el hombre Jesucristo, que se entreg&oacute; a s&iacute; mismo como rescate por todos. (<span class="popup-link" @click = "popUp('pop1')"> Filipenses 2:11</span>;

	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<div>
	<p><sup class="versenum">11&nbsp;</sup>y toda lengua confiese que Jesucristo es el Se&ntilde;or,<br />
	&nbsp;&nbsp;&nbsp;&nbsp;para gloria de Dios Padre.</p>
	</div>
	<!-- end bible --></div>
	<span class="popup-link" @click = "popUp('pop2')"> 1 Timoteo 2:4-6</span>)</li>
</ul>

<div class="popup invisible" id="pop2"><!-- begin bible -->
<p><sup class="versenum">4&nbsp;</sup>pues &eacute;l quiere que todos sean salvos y lleguen a conocer la verdad.<sup class="versenum">5&nbsp;</sup>Porque hay un solo Dios y un solo mediador entre Dios y los hombres, Jesucristo hombre,<sup class="versenum">6&nbsp;</sup>quien dio su vida como rescate por todos. Este testimonio Dios lo ha dado a su debido tiempo,</p>
<!-- end bible --></div>

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
	<li>Pregunte: &quot;&iquest;Qu&eacute; pas&oacute; cuando confiaste en Dios tus metas y tus declaraciones: Yo har&eacute;&hellip; cu&aacute;ndo&hellip;?&quot;</li>
</ul>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2 class="back">+ Motivaci&oacute;n y est&iacute;mulo</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->
<p class="back">Elija una manera de proyectar visi&oacute;n de qui&eacute;nes pueden llegar a ser en Cristo o lo que Dios puede hacer a trav&eacute;s de ellos al:</p>

<ul>
	<li class="back">Compartir un vers&iacute;culo B&iacute;blico que les recuerde el Coraz&oacute;n del Padre y la visi&oacute;n final, o</li>
	<li class="back">reflexionando sobre los cambios en su vida desde que comenzaron a seguir a Cristo, o</li>
	<li class="back">record&aacute;ndoles lo que Dios quiere hacer a trav&eacute;s de ellos.</li>
</ul>

<p class="back">Comparta la GRAN visi&oacute;n de &quot;Una iglesia para cada ciudad y comunidad, y el Evangelio para cada persona&rdquo;</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/images/standard/look-up.png" />
<div class="lesson-subtitle"><span class="up">Mirando para arriba</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary2" class="summary"><h2 class="up">+ Contexto</h2></div>
<div class="collapsed" id ="Text2">
<!-- end default revealSummary -->
<ul>
	<li class="back">P&iacute;dale al grupo que cuente la historia de la semana pasada.</li>
</ul>

</div>

<h2 class="up">Leer</h2>

<ul>
	<li class="back">Lea o vea <strong>Juan 3:1-21</strong> dos veces mientras todos escuchan</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Lee Juan 3:1-21</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>Jes&uacute;s ense&ntilde;a a Nicodemo</h3>

<p><sup class="versenum">1 </sup>Hab&iacute;a entre los fariseos un dirigente de los jud&iacute;os llamado Nicodemo.<sup class="versenum">2&nbsp;</sup>Este fue de noche a visitar a Jes&uacute;s.</p>

<p>&mdash;Rab&iacute; &mdash;le dijo&mdash;, sabemos que eres un maestro que ha venido de parte de Dios, porque nadie podr&iacute;a hacer las se&ntilde;ales que t&uacute; haces si Dios no estuviera con &eacute;l.</p>

<p><sup class="versenum">3&nbsp;</sup>&mdash;De veras te aseguro que quien no nazca de nuevo no puede ver el reino de Dios &mdash;dijo Jes&uacute;s.</p>

<p><sup class="versenum">4&nbsp;</sup>&mdash;&iquest;C&oacute;mo puede uno nacer de nuevo siendo ya viejo? &mdash;pregunt&oacute; Nicodemo&mdash;. &iquest;Acaso puede entrar por segunda vez en el vientre de su madre y volver a nacer?</p>

<p><sup class="versenum">5&nbsp;</sup>&mdash;Yo te aseguro que quien no nazca de agua y del Esp&iacute;ritu no puede entrar en el reino de Dios &mdash;respondi&oacute; Jes&uacute;s&mdash;.<sup class="versenum">6&nbsp;</sup>Lo que nace del cuerpo es cuerpo; lo que nace del Esp&iacute;ritu es esp&iacute;ritu.<sup class="versenum">7&nbsp;</sup>No te sorprendas de que te haya dicho: &ldquo;Tienen que nacer de nuevo&rdquo;.<sup class="versenum">8&nbsp;</sup>El viento sopla por donde quiere, y lo oyes silbar, aunque ignoras de d&oacute;nde viene y a d&oacute;nde va. Lo mismo pasa con todo el que nace del Esp&iacute;ritu.</p>

<p><sup class="versenum">9&nbsp;</sup>Nicodemo replic&oacute;:</p>

<p>&mdash;&iquest;C&oacute;mo es posible que esto suceda?</p>

<p><sup class="versenum">10&nbsp;</sup>&mdash;T&uacute; eres maestro de Israel, &iquest;y no entiendes estas cosas? &mdash;respondi&oacute; Jes&uacute;s&mdash;.<sup class="versenum">11&nbsp;</sup>Te aseguro que hablamos de lo que sabemos y damos testimonio de lo que hemos visto personalmente, pero ustedes no aceptan nuestro testimonio.<sup class="versenum">12&nbsp;</sup>Si les he hablado de las cosas terrenales, y no creen, &iquest;entonces c&oacute;mo van a creer si les hablo de las celestiales?<sup class="versenum">13&nbsp;</sup>Nadie ha subido jam&aacute;s al cielo sino el que descendi&oacute; del cielo, el Hijo del hombre.</p>

<h3>Jes&uacute;s y el amor del Padre</h3>

<p><sup class="versenum">14&nbsp;</sup>&raquo;Como levant&oacute; Mois&eacute;s la serpiente en el desierto, as&iacute; tambi&eacute;n tiene que ser levantado el Hijo del hombre,<sup class="versenum">15&nbsp;</sup>para que todo el que crea en &eacute;l tenga vida eterna.</p>

<p><sup class="versenum">16&nbsp;</sup>&raquo;Porque tanto am&oacute; Dios al mundo que dio a su Hijo unig&eacute;nito, para que todo el que cree en &eacute;l no se pierda, sino que tenga vida eterna.<sup class="versenum">17&nbsp;</sup>Dios no envi&oacute; a su Hijo al mundo para condenar al mundo, sino para salvarlo por medio de &eacute;l.<sup class="versenum">18&nbsp;</sup>El que cree en &eacute;l no es condenado, pero el que no cree ya est&aacute; condenado por no haber cre&iacute;do en el nombre del Hijo unig&eacute;nito de Dios.<sup class="versenum">19&nbsp;</sup>Esta es la causa de la condenaci&oacute;n: que la luz vino al mundo, pero la humanidad prefiri&oacute; las tinieblas a la luz, porque sus hechos eran perversos.<sup class="versenum">20&nbsp;</sup>Pues todo el que hace lo malo aborrece la luz, y no se acerca a ella por temor a que sus obras queden al descubierto.<sup class="versenum">21&nbsp;</sup>En cambio, el que practica la verdad se acerca a la luz, para que se vea claramente que ha hecho sus obras en obediencia a Dios&raquo;.</p>
<!-- end bible -->

<p class="bible"></p>

</div>


<button id="MC2/spa/video/multiply2/211.mp4" type="button" class="external-movie">
         Mira &nbsp;Juan 3:1-21&nbsp;</button>
    <div class="collapsed"></div>

<h2 class="up">Discusi&oacute;n de descubrimiento</h2>

<ul class="up">
	<li>&iquest;Qu&eacute; te llam&oacute; la atenci&oacute;n o qu&eacute; es lo que m&aacute;s te gust&oacute;? &iquest;Por qu&eacute;?</li>
	<li>&iquest;Hay algo nuevo o algo que ha desarrollado hasta este punto de la historia de Jes&uacute;s?</li>
	<li>&iquest;Qu&eacute; aprendemos acerca de la humanidad o divinidad de Jes&uacute;s en este pasaje?</li>
	<li>&iquest;C&oacute;mo podemos vivir de manera diferente ahora que conocemos esta historia?</li>
</ul>

<p><em>Preguntas adicionales que puede utilizar:</em></p>

<ul>
	<li>&iquest;Qu&eacute; est&aacute;n aprendiendo sus seguidores?</li>
	<li>&iquest;Qu&eacute; es lo que Jes&uacute;s nos est&aacute; modelando acerca de la vida, el ministerio o el liderazgo piadoso?</li>
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
<p class="up">Cuando Jes&uacute;s expuls&oacute; a los cambistas del templo, llam&oacute; la atenci&oacute;n de todos. Un l&iacute;der religioso de alto rango llamado Nicodemo vino a investigar a Jes&uacute;s. Jes&uacute;s lo desaf&iacute;a a quitar sus ojos de s&iacute; mismo y lo que parece imposible y lo desaf&iacute;a a abrir sus ojos de fe. Jes&uacute;s comparte que lo que Nicodemo piensa que es imposible se hace posible. Aunque no se puede ver el viento, se pueden ver sus efectos. Jes&uacute;s dice que es lo mismo para aquellos que han nacido en el Esp&iacute;ritu. Dios nos am&oacute; tanto que &eacute;l nos proporcion&oacute; una manera de renacer, de tener nueva vida en &Eacute;l.</p>

<ul>
</ul>

<p>&nbsp;</p>
</div>

<p><em>Practique la entrega y la comuni&oacute;n aqu&iacute; o en la secci&oacute;n Preparaci&oacute;n para la Misi&oacute;n</em></p>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/images/standard/look-forward.png" />
<div class="lesson-subtitle"><span class="forward">Mirando hacia adelante</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary4" class="summary"><h2 class="forward">+ Preparaci&oacute;n para la Misi&oacute;n</h2></div>
<div class="collapsed" id ="Text4">
<!-- end default revealSummary -->
<p class="up">Practique las habilidades necesarias o temas previos para ayudar a prepararse para ministrar a los dem&aacute;s:</p>

<ul class="forward">
	<li class="up">Orar, Cuidar, Compartir</li>
	<li class="up">Compartir el Evangelio</li>
	<li class="up">Estudios B&iacute;blicos Fundacionales</li>
</ul>

</div>

<h2 class="forward">Ir a la Misi&oacute;n</h2>

<ul class="forward">
	<li>Identifica personas o lugares a los que tomar&aacute;s la iniciativa de ministrar esta semana.</li>
	<li>Escriba sus declaraciones de &ldquo;Yo har&eacute;&hellip;para cuando&hellip;&rdquo; y comp&aacute;rtala en su peque&ntilde;o grupo.</li>
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
	<li>Comprometa las metas de todos con el Se&ntilde;or. P&iacute;dele al Se&ntilde;or que nos ayude a ser fieles y &uacute;sanos para iniciar un movimiento de hacedores de disc&iacute;pulos.</li>
</ul>

<h2>Bendici&oacute;n (opcional)</h2>


<!-- begin sdcard languageFooterSingle -->
<!-- begin mc2 sdcard languageFooter -->

<div class="languages" id="languages"><img class="languages" src="@/assets/sites/mc2/images/standard/OtherLanguagesTop.png" /></div>
<table class="social">
	<tbody>
		<tr>
			<td class="social"  @click="share('android', 'spa', '')">
				<img  class="social" src="@/assets/sites/mc2/images/standard/android.png" />
			</td>

			<td class="social" @click="share('lesson', 'Una búsqueda nocturna: ', '/content/M2/spa/multiply2/multiply211.html')">
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