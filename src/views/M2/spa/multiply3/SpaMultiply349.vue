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
    <div class="nav full internal-link" @click="this.pageGoBack('spa-multiply3-index')">
        <img src="@/assets/sites/mc2/images/ribbons/mc2back.png" class="nav full" />
    </div>
</div>
<div class="page_content ltr">
<div class="block ltr">
                        <div class="chapter_number ltr"><h1>49.</h1></div>
                        <div class="chapter_title ltr"><h1>Pablo da testimonio del nuevo Gobernador romano Festo</h1></div>
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

<p class="back">(Opcional) Jesucristo es el Se&ntilde;or, para la gloria de Dios Padre. &Eacute;l quiere que todos los hombres sean salvos y lleguen al conocimiento de la verdad. Porque hay un solo Dios y un mediador tambi&eacute;n entre Dios y el hombre, el hombre Jesucristo, que se entreg&oacute; a s&iacute; mismo como rescate por todos. (Filipenses 2:11b; 1 Timoteo 2:4-6a)</p>

</div>

<h2 class="back">Cuidado</h2>

<p><em>Ministrar a las necesidades de los dem&aacute;s en oraci&oacute;n, consejo b&iacute;blico y aliento.</em></p>

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
<p><em>Elija una manera de proyectar visi&oacute;n de qui&eacute;nes pueden llegar a ser en Cristo o lo que Dios puede hacer a trav&eacute;s de ellos al</em>:</p>

<ul>
	<li>Compartir un vers&iacute;culo B&iacute;blico que les recuerde el Coraz&oacute;n del Padre y la visi&oacute;n final.</li>
	<li>Reflexionando sobre los cambios en su vida desde que comenzaron a seguir a Cristo</li>
	<li>record&aacute;ndoles lo que Dios quiere hacer a trav&eacute;s de ellos</li>
</ul>

<p>Comparta la GRAN visi&oacute;n de &quot;Una iglesia para cada pueblo y comunidad, y el Evangelio para cada persona&quot;.</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/images/standard/look-up.png" />
<div class="lesson-subtitle"><span class="up">Mirando para arriba</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary2" class="summary"><h2 class="up">+ Contexto</h2></div>
<div class="collapsed" id ="Text2">
<!-- end default revealSummary -->
<ul>
	<li class="back">P&iacute;dale al grupo que cuente la historia de la semana pasada</li>
</ul>

</div>

<h2 class="up">Leer</h2>

<ul>
	<li class="back">Lea o vea <strong>Hechos 25:1-22</strong> dos veces mientras todos escuchan</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Lee Hechos 25:1-22</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>El proceso ante Festo</h3>

<p><sup class="versenum">1 </sup>Tres d&iacute;as despu&eacute;s de llegar a la provincia, Festo subi&oacute; de Cesarea a Jerusal&eacute;n.<sup class="versenum">2&nbsp;</sup>Entonces los jefes de los sacerdotes y los dirigentes de los jud&iacute;os presentaron sus acusaciones contra Pablo.<sup class="versenum">3&nbsp;</sup>Insistentemente le pidieron a Festo que les hiciera el favor de trasladar a Pablo a Jerusal&eacute;n. Lo cierto es que ellos estaban preparando una emboscada para matarlo en el camino.<sup class="versenum">4&nbsp;</sup>Festo respondi&oacute;: &laquo;Pablo est&aacute; preso en Cesarea, y yo mismo partir&eacute; en breve para all&aacute;.<sup class="versenum">5&nbsp;</sup>Que vayan conmigo algunos de los dirigentes de ustedes y formulen all&iacute; sus acusaciones contra &eacute;l, si es que ha hecho algo malo&raquo;.</p>

<p><sup class="versenum">6&nbsp;</sup>Despu&eacute;s de pasar entre los jud&iacute;os unos ocho o diez d&iacute;as, Festo baj&oacute; a Cesarea, y al d&iacute;a siguiente convoc&oacute; al tribunal y mand&oacute; que le trajeran a Pablo.<sup class="versenum">7&nbsp;</sup>Cuando este se present&oacute;, los jud&iacute;os que hab&iacute;an bajado de Jerusal&eacute;n lo rodearon, formulando contra &eacute;l muchas acusaciones graves que no pod&iacute;an probar.</p>

<p><sup class="versenum">8&nbsp;</sup>Pablo se defend&iacute;a:</p>

<p>&mdash;No he cometido ninguna falta ni contra la ley de los jud&iacute;os ni contra el templo ni contra el emperador.</p>

<p><sup class="versenum">9&nbsp;</sup>Pero Festo, queriendo congraciarse con los jud&iacute;os, le pregunt&oacute;:</p>

<p>&mdash;&iquest;Est&aacute;s dispuesto a subir a Jerusal&eacute;n para ser juzgado all&iacute; ante m&iacute;?</p>

<p><sup class="versenum">10&nbsp;</sup>Pablo contest&oacute;:</p>

<p>&mdash;Ya estoy ante el tribunal del emperador, que es donde se me debe juzgar. No les he hecho ning&uacute;n agravio a los jud&iacute;os, como usted sabe muy bien.<sup class="versenum">11&nbsp;</sup>Si soy culpable de haber hecho algo que merezca la muerte, no me niego a morir. Pero, si no son ciertas las acusaciones que estos jud&iacute;os formulan contra m&iacute;, nadie tiene el derecho de entregarme a ellos para complacerlos. &iexcl;Apelo al emperador!</p>

<p><sup class="versenum">12&nbsp;</sup>Despu&eacute;s de consultar con sus asesores, Festo declar&oacute;:</p>

<p>&mdash;Has apelado al emperador. &iexcl;Al emperador ir&aacute;s!</p>

<h3>Festo consulta al rey Agripa</h3>

<p><sup class="versenum">13&nbsp;</sup>Pasados algunos d&iacute;as, el rey Agripa y Berenice llegaron a Cesarea para saludar a Festo.<sup class="versenum">14&nbsp;</sup>Como se entretuvieron all&iacute; varios d&iacute;as, Festo le present&oacute; al rey el caso de Pablo.</p>

<p>&mdash;Hay aqu&iacute; un hombre &mdash;le dijo&mdash; que F&eacute;lix dej&oacute; preso.<sup class="versenum">15&nbsp;</sup>Cuando fui a Jerusal&eacute;n, los jefes de los sacerdotes y los ancianos de los jud&iacute;os presentaron acusaciones contra &eacute;l y exigieron que se le condenara.<sup class="versenum">16&nbsp;</sup>Les respond&iacute; que no es costumbre de los romanos entregar a ninguna persona sin antes concederle al acusado un careo con sus acusadores, y darle la oportunidad de defenderse de los cargos.<sup class="versenum">17&nbsp;</sup>Cuando acudieron a m&iacute;, no dilat&eacute; el caso, sino que convoqu&eacute; al tribunal el d&iacute;a siguiente y mand&eacute; traer a este hombre.<sup class="versenum">18&nbsp;</sup>Al levantarse para hablar, sus acusadores no alegaron en su contra ninguno de los delitos que yo hab&iacute;a supuesto.<sup class="versenum">19&nbsp;</sup>M&aacute;s bien, ten&iacute;an contra &eacute;l algunas cuestiones tocantes a su propia religi&oacute;n y sobre un tal Jes&uacute;s, ya muerto, que Pablo sostiene que est&aacute; vivo.<sup class="versenum">20&nbsp;</sup>Yo no sab&iacute;a c&oacute;mo investigar tales cuestiones, as&iacute; que le pregunt&eacute; si estaba dispuesto a ir a Jerusal&eacute;n para ser juzgado all&iacute; con respecto a esos cargos.<sup class="versenum">21&nbsp;</sup>Pero, como Pablo apel&oacute; para que se le reservara el fallo al emperador, orden&eacute; que quedara detenido hasta ser remitido a Roma.</p>

<p><sup class="versenum">22&nbsp;</sup>&mdash;A m&iacute; tambi&eacute;n me gustar&iacute;a o&iacute;r a ese hombre &mdash;le dijo Agripa a Festo.</p>

<p>&mdash;Pues ma&ntilde;ana mismo lo oir&aacute; usted &mdash;le contest&oacute; Festo.</p>
<!-- end bible -->

<p class="bible"></p>

</div>


<button id="MC2/spa/video/multiply3/349.mp4" type="button" class="external-movie">
         Mira Hechos 25:1-22</button>
    <div class="collapsed"></div>




<h2 class="up">Preguntas de Descubrimiento</h2>

<ul class="up">
	<li>&iquest;Qu&eacute; te llam&oacute; la atenci&oacute;n o qu&eacute; es lo que m&aacute;s te gust&oacute;? &iquest;por qu&eacute;?</li>
	<li>&iquest;Qu&eacute; hay de nuevo o se ha desarrollado a estas alturas de la historia?</li>
	<li>&iquest;Qu&eacute; se est&aacute; modelando acerca de una vida dependiente del Esp&iacute;ritu, haciendo disc&iacute;pulos o liderazgo?</li>
	<li>&iquest;C&oacute;mo podemos vivir de manera diferente ahora que conocemos esta historia?</li>
</ul>

<p>Preguntas adicionales que puede utilizar:</p>

<ul>
	<li>&iquest;C&oacute;mo contin&uacute;an los seguidores de Jes&uacute;s Su obra de hacer disc&iacute;pulos y plantar iglesias?</li>
	<li>&iquest;C&oacute;mo est&aacute; impactando el Evangelio en las personas y en la sociedad?</li>
	<li>&iquest;Qu&eacute; barreras u obst&aacute;culos se superaron y c&oacute;mo se superaron?</li>
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
<p class="up">El Gobernador F&eacute;lix mantuvo a Pablo en prisi&oacute;n durante dos a&ntilde;os y pas&oacute; su caso al nuevo Gobernador, Festo, para que se ocupara de &eacute;l. Mientras Festo visitaba Jerusal&eacute;n, los l&iacute;deres religiosos jud&iacute;os vieron una oportunidad para finalmente conseguir a Pablo. Si el juicio pudiera ser llevado de vuelta a Jerusal&eacute;n, tendr&iacute;an otra oportunidad de asesinar a Pablo durante el viaje de dos d&iacute;as. Sospechando de su plan, Pablo inst&oacute; al Gobernador a acatar la ley romana y no ceder para complacer a los l&iacute;deres jud&iacute;os. Despu&eacute;s de haber estado injustamente detenido durante dos a&ntilde;os, us&oacute; su derecho como ciudadano romano a que su caso fuera escuchado ante C&eacute;sar. Pablo argument&oacute; que seguir a Jes&uacute;s era consistente con su identidad como jud&iacute;o y ciudadano leal de Roma. Cuando el Rey Agripa y Bernice visitaron Cesarea, estaban interesados en escuchar a Pablo. Jes&uacute;s est&aacute; guiando soberanamente todas estas circunstancias para cumplir Su promesa de que Pablo testificar&iacute;a ante C&eacute;sar.</p>

<p class="up"><em>Practique el dar y la Santa Cena aqu&iacute; o en la secci&oacute;n Preparaci&oacute;n para la Misi&oacute;n</em></p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/images/standard/look-forward.png" />
<div class="lesson-subtitle"><span class="forward">Mirando hacia adelante</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary4" class="summary"><h2 class="forward">+ Preparaci&oacute;n para la Misi&oacute;n</h2></div>
<div class="collapsed" id ="Text4">
<!-- end default revealSummary -->
<ul class="forward">
	<li>Practique las habilidades necesarias o temas previos para ayudar a prepararse para ministrar a los dem&aacute;s:
	<ul>
		<li>Orar, Cuidar, Compartir</li>
		<li>Evangelio</li>
		<li>Estudios B&iacute;blicos Fundamentales</li>
	</ul>
	</li>
</ul>

</div>

<h2 class="forward">Ir a la Misi&oacute;n</h2>

<ul class="forward">
	<li>Identifica personas o lugares a los que tomar&aacute;s la iniciativa de ministrar esta semana.</li>
	<li>Escriba declaraciones usando de &quot;Yo har&eacute;&hellip;. cuando&hellip;&rdquo; y que lo comparan con a su grupo.</li>
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

<h2>Bendici&oacute;n (opcional)</h2>

<p>&nbsp;</p>


<!-- begin sdcard languageFooterSingle -->
<!-- begin mc2 sdcard languageFooter -->

<div class="languages" id="languages"><img class="languages" src="@/assets/sites/mc2/images/standard/OtherLanguagesTop.png" /></div>
<table class="social">
	<tbody>
		<tr>
			<td class="social"  @click="share('android', 'spa', '')">
				<img  class="social" src="@/assets/sites/mc2/images/standard/android.png" />
			</td>

			<td class="social" @click="share('lesson', 'Pablo da testimonio del nuevo Gobernador romano Festo: ', '/content/M2/spa/multiply3/multiply349.html')">
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