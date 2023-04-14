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
                        <div class="chapter_number ltr"><h1>33.</h1></div>
                        <div class="chapter_title ltr"><h1>Personas de paz en lugares inesperados</h1></div>
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
	<li class="back">Lea o vea <strong>Hechos 16:16-40</strong> dos veces mientras todos escuchan</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Lee Hechos 16:16-40</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>Pablo y Silas en la c&aacute;rcel</h3>

<p><sup class="versenum">16&nbsp;</sup>Una vez, cuando &iacute;bamos al lugar de oraci&oacute;n, nos sali&oacute; al encuentro una joven esclava que ten&iacute;a un esp&iacute;ritu de adivinaci&oacute;n. Con sus poderes ganaba mucho dinero para sus amos.<sup class="versenum">17&nbsp;</sup>Nos segu&iacute;a a Pablo y a nosotros, gritando:</p>

<p>&mdash;Estos hombres son siervos del Dios Alt&iacute;simo, y les anuncian a ustedes el camino de salvaci&oacute;n.</p>

<p><sup class="versenum">18&nbsp;</sup>As&iacute; continu&oacute; durante muchos d&iacute;as. Por fin Pablo se molest&oacute; tanto que se volvi&oacute; y reprendi&oacute; al esp&iacute;ritu:</p>

<p>&mdash;&iexcl;En el nombre de Jesucristo, te ordeno que salgas de ella!</p>

<p>Y en aquel mismo momento el esp&iacute;ritu la dej&oacute;.</p>

<p><sup class="versenum">19&nbsp;</sup>Cuando los amos de la joven se dieron cuenta de que se les hab&iacute;a esfumado la esperanza de ganar dinero, echaron mano a Pablo y a Silas y los arrastraron a la plaza, ante las autoridades.<sup class="versenum">20&nbsp;</sup>Los presentaron ante los magistrados y dijeron:</p>

<p>&mdash;Estos hombres son jud&iacute;os, y est&aacute;n alborotando a nuestra ciudad,<sup class="versenum">21&nbsp;</sup>ense&ntilde;ando costumbres que a los romanos se nos proh&iacute;be admitir o practicar.</p>

<p><sup class="versenum">22&nbsp;</sup>Entonces la multitud se amotin&oacute; contra Pablo y Silas, y los magistrados mandaron que les arrancaran la ropa y los azotaran.<sup class="versenum">23&nbsp;</sup>Despu&eacute;s de darles muchos golpes, los echaron en la c&aacute;rcel, y ordenaron al carcelero que los custodiara con la mayor seguridad.<sup class="versenum">24&nbsp;</sup>Al recibir tal orden, este los meti&oacute; en el calabozo interior y les sujet&oacute; los pies en el cepo.</p>

<p><sup class="versenum">25&nbsp;</sup>A eso de la medianoche, Pablo y Silas se pusieron a orar y a cantar himnos a Dios, y los otros presos los escuchaban.<sup class="versenum">26&nbsp;</sup>De repente se produjo un terremoto tan fuerte que la c&aacute;rcel se estremeci&oacute; hasta sus cimientos. Al instante se abrieron todas las puertas y a los presos se les soltaron las cadenas.<sup class="versenum">27&nbsp;</sup>El carcelero despert&oacute; y, al ver las puertas de la c&aacute;rcel de par en par, sac&oacute; la espada y estuvo a punto de matarse, porque pensaba que los presos se hab&iacute;an escapado. Pero Pablo le grit&oacute;:</p>

<p><sup class="versenum">28&nbsp;</sup>&mdash;&iexcl;No te hagas ning&uacute;n da&ntilde;o! &iexcl;Todos estamos aqu&iacute;!</p>

<p><sup class="versenum">29&nbsp;</sup>El carcelero pidi&oacute; luz, entr&oacute; precipitadamente y se ech&oacute; temblando a los pies de Pablo y de Silas.<sup class="versenum">30&nbsp;</sup>Luego los sac&oacute; y les pregunt&oacute;:</p>

<p>&mdash;Se&ntilde;ores, &iquest;qu&eacute; tengo que hacer para ser salvo?</p>

<p><sup class="versenum">31&nbsp;</sup>&mdash;Cree en el Se&ntilde;or Jes&uacute;s; as&iacute; t&uacute; y tu familia ser&aacute;n salvos &mdash;le contestaron.</p>

<p><sup class="versenum">32&nbsp;</sup>Luego les expusieron la palabra de Dios a &eacute;l y a todos los dem&aacute;s que estaban en su casa.<sup class="versenum">33&nbsp;</sup>A esas horas de la noche, el carcelero se los llev&oacute; y les lav&oacute; las heridas; en seguida fueron bautizados &eacute;l y toda su familia.<sup class="versenum">34&nbsp;</sup>El carcelero los llev&oacute; a su casa, les sirvi&oacute; comida y se alegr&oacute; mucho junto con toda su familia por haber cre&iacute;do en Dios.</p>

<p><sup class="versenum">35&nbsp;</sup>Al amanecer, los magistrados mandaron a unos guardias al carcelero con esta orden: &laquo;Suelta a esos hombres&raquo;.<sup class="versenum">36&nbsp;</sup>El carcelero, entonces, le inform&oacute; a Pablo:</p>

<p>&mdash;Los magistrados han ordenado que los suelte. As&iacute; que pueden irse. Vayan en paz.</p>

<p><sup class="versenum">37&nbsp;</sup>Pero Pablo respondi&oacute; a los guardias:</p>

<p>&mdash;&iquest;C&oacute;mo? A nosotros, que somos ciudadanos romanos, que nos han azotado p&uacute;blicamente y sin proceso alguno, y nos han echado en la c&aacute;rcel, &iquest;ahora quieren expulsarnos a escondidas? &iexcl;Nada de eso! Que vengan ellos personalmente a escoltarnos hasta la salida.</p>

<p><sup class="versenum">38&nbsp;</sup>Los guardias comunicaron la respuesta a los magistrados. Estos se asustaron cuando oyeron que Pablo y Silas eran ciudadanos romanos,<sup class="versenum">39&nbsp;</sup>as&iacute; que fueron a presentarles sus disculpas. Los escoltaron desde la c&aacute;rcel, pidi&eacute;ndoles que se fueran de la ciudad.<sup class="versenum">40&nbsp;</sup>Al salir de la c&aacute;rcel, Pablo y Silas se dirigieron a la casa de Lidia, donde se vieron con los hermanos y los animaron. Despu&eacute;s se fueron.</p>
<!-- end bible -->

<p class="bible"></p>

</div>


<button id="MC2/spa/video/multiply3/333.mp4" type="button" class="external-movie">
         Mira &nbsp;Hechos 16:16-40&nbsp;</button>
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
<p class="up">El equipo del ministerio de Pablo, Silas, Timoteo y Lucas est&aacute;n en Filipos. Debido a que no hab&iacute;a sinagoga, fueron al lugar de oraci&oacute;n junto al r&iacute;o para buscar a otros que tuvieran un inter&eacute;s espiritual. Una esclava pose&iacute;da por demonios trat&oacute; de asociarse con el equipo, pero Pablo sab&iacute;a por experiencia dolorosa el peligro de que la gente pensara que estaba representando pr&aacute;cticas religiosas falsas (Hechos 14:8-20). El poder de Jes&uacute;s super&oacute; el esp&iacute;ritu demon&iacute;aco y liber&oacute; a la ni&ntilde;a. Debido a que sus due&ntilde;os ya no pod&iacute;an usarla para ganar dinero, acusaron falsamente a Paul y Silas de introducir costumbres ilegales que llevaron a su arresto. Incluso en medio de estas dif&iacute;ciles circunstancias, Pablo y Silas mostraron confianza en el Se&ntilde;or mientras lo adoraban en prisi&oacute;n. En este caso de persecuci&oacute;n, el Se&ntilde;or hizo un milagro. Como parte de la obra milagrosa del Se&ntilde;or, se revel&oacute; que el carcelero era una persona de paz preparada por Dios. El carcelero y toda su familia cre&iacute;an en Jes&uacute;s. Antes de que el equipo se fuera, alentaron a los creyentes en la nueva iglesia que se reun&iacute;a en la casa de Lydia.</p>

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

			<td class="social" @click="share('lesson', 'Personas de paz en lugares inesperados: ', '/content/M2/spa/multiply3/multiply333.html')">
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