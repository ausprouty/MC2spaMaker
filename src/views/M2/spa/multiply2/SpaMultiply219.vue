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
                        <div class="chapter_number ltr"><h1>19.</h1></div>
                        <div class="chapter_title ltr"><h1>Segunda expedición para pescar hombres</h1></div>
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
	<li class="back">Lea o vea <strong>Marcos 1:29-39</strong> dos veces mientras todos escuchan</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Lee Marcos 1:29-39</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>Jes&uacute;s sana a muchos enfermos</h3>

<p><sup class="versenum">29&nbsp;</sup>Tan pronto como salieron de la sinagoga, Jes&uacute;s fue con Jacobo y Juan a casa de Sim&oacute;n y Andr&eacute;s.<sup class="versenum">30&nbsp;</sup>La suegra de Sim&oacute;n estaba en cama con fiebre, y en seguida se lo dijeron a Jes&uacute;s.<sup class="versenum">31&nbsp;</sup>&Eacute;l se le acerc&oacute;, la tom&oacute; de la mano y la ayud&oacute; a levantarse. Entonces se le quit&oacute; la fiebre y se puso a servirles.</p>

<p><sup class="versenum">32&nbsp;</sup>Al atardecer, cuando ya se pon&iacute;a el sol, la gente le llev&oacute; a Jes&uacute;s todos los enfermos y endemoniados,<sup class="versenum">33&nbsp;</sup>de manera que la poblaci&oacute;n entera se estaba congregando a la puerta.<sup class="versenum">34&nbsp;</sup>Jes&uacute;s san&oacute; a muchos que padec&iacute;an de diversas enfermedades. Tambi&eacute;n expuls&oacute; a muchos demonios, pero no los dejaba hablar porque sab&iacute;an qui&eacute;n era &eacute;l.</p>

<h3>Jes&uacute;s ora en un lugar solitario</h3>

<p><sup class="versenum">35&nbsp;</sup>Muy de madrugada, cuando todav&iacute;a estaba oscuro, Jes&uacute;s se levant&oacute;, sali&oacute; de la casa y se fue a un lugar solitario, donde se puso a orar.<sup class="versenum">36&nbsp;</sup>Sim&oacute;n y sus compa&ntilde;eros salieron a buscarlo.</p>

<p><sup class="versenum">37&nbsp;</sup>Por fin lo encontraron y le dijeron:</p>

<p>&mdash;Todo el mundo te busca.</p>

<p><sup class="versenum">38&nbsp;</sup>Jes&uacute;s respondi&oacute;:</p>

<p>&mdash;V&aacute;monos de aqu&iacute; a otras aldeas cercanas donde tambi&eacute;n pueda predicar; para esto he venido.</p>

<p><sup class="versenum">39&nbsp;</sup>As&iacute; que recorri&oacute; toda Galilea, predicando en las sinagogas y expulsando demonios.</p>
<!-- end bible -->

<p class="bible"></p>

</div>


<button id="MC2/spa/video/multiply2/219.mp4" type="button" class="external-movie">
         Mira &nbsp;Marcos 1:29-39&nbsp;</button>
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

<p class="up">El segundo alcance de Jes&uacute;s es en la casa de Pedro. Este es un alcance en el hogar que comenz&oacute; en la noche despu&eacute;s de la puesta del sol. Gente de toda la regi&oacute;n vino a ver al hombre que hab&iacute;a echado fuera a un demonio en la sinagoga. Este fue un evento espont&aacute;neo que dur&oacute; varias horas en la noche. Despu&eacute;s de una larga noche de ministerio, Jes&uacute;s se levanta temprano y se escapa de la casa para estar a solas con el Padre. &Eacute;l model&oacute; la prioridad de estar a solas con el Padre, escuchar Su voz, averiguar los pr&oacute;ximos pasos en la vida y el ministerio, y tener comuni&oacute;n con &Eacute;l. A pesar de que todos quer&iacute;an que Jes&uacute;s se quedara y tuviera un ministerio m&aacute;s exitoso, &Eacute;l fue tras la obediencia al Padre y el alcance Su misi&oacute;n.</p>

<ul>
	<li class="nobreak-final-final">Estudio adicional: <span class="popup-link" @click = "popUp('pop3')"> Lucas 4:38-44</span>;&nbsp;

	<div class="popup invisible" id="pop3"><!-- begin bible -->
	<p><sup class="versenum">38&nbsp;</sup>Cuando Jes&uacute;s sali&oacute; de la sinagoga, se fue a casa de Sim&oacute;n, cuya suegra estaba enferma con una fiebre muy alta. Le pidieron a Jes&uacute;s que la ayudara,<sup class="versenum">39&nbsp;</sup>as&iacute; que se inclin&oacute; sobre ella y reprendi&oacute; a la fiebre, la cual se le quit&oacute;. Ella se levant&oacute; en seguida y se puso a servirles.</p>

	<p><sup class="versenum">40&nbsp;</sup>Al ponerse el sol, la gente le llev&oacute; a Jes&uacute;s todos los que padec&iacute;an de diversas enfermedades; &eacute;l puso las manos sobre cada uno de ellos y los san&oacute;.<sup class="versenum">41&nbsp;</sup>Adem&aacute;s, de muchas personas sal&iacute;an demonios que gritaban: &laquo;&iexcl;T&uacute; eres el Hijo de Dios!&raquo; Pero &eacute;l los reprend&iacute;a y no los dejaba hablar porque sab&iacute;an que &eacute;l era el Cristo.</p>

	<p><sup class="versenum">42&nbsp;</sup>Cuando amaneci&oacute;, Jes&uacute;s sali&oacute; y se fue a un lugar solitario. La gente andaba busc&aacute;ndolo y, cuando llegaron adonde &eacute;l estaba, procuraban detenerlo para que no se fuera.<sup class="versenum">43&nbsp;</sup>Pero &eacute;l les dijo: &laquo;Es preciso que anuncie tambi&eacute;n a los dem&aacute;s pueblos las buenas nuevas del reino de Dios, porque para esto fui enviado&raquo;.</p>

	<p><sup class="versenum">44&nbsp;</sup>Y sigui&oacute; predicando en las sinagogas de los jud&iacute;os.</p>
	<!-- end bible --></div>
	<span class="popup-link" @click = "popUp('pop4')"> Mateo 8:14-17</span>.

	<div class="popup invisible" id="pop4"><!-- begin bible -->
	<div>
	<p><sup class="versenum">14&nbsp;</sup>Cuando Jes&uacute;s entr&oacute; en casa de Pedro, vio a la suegra de este en cama, con fiebre.<sup class="versenum">15&nbsp;</sup>Le toc&oacute; la mano y la fiebre se le quit&oacute;; luego ella se levant&oacute; y comenz&oacute; a servirle.</p>

	<p><sup class="versenum">16&nbsp;</sup>Al atardecer, le llevaron muchos endemoniados, y con una sola palabra expuls&oacute; a los esp&iacute;ritus, y san&oacute; a todos los enfermos.<sup class="versenum">17&nbsp;</sup>Esto sucedi&oacute; para que se cumpliera lo dicho por el profeta Isa&iacute;as:</p>

	<p>&laquo;&Eacute;l carg&oacute; con nuestras enfermedades<br />
	&nbsp;&nbsp;&nbsp;&nbsp;y soport&oacute; nuestros dolores&raquo;.</p>
	</div>
	<!-- end bible --></div>
	</li>
</ul>
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

			<td class="social" @click="share('lesson', 'Segunda expedición para pescar hombres: ', '/content/M2/spa/multiply2/multiply219.html')">
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