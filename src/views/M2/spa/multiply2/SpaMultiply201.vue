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
                        <div class="chapter_number ltr"><h1>1.</h1></div>
                        <div class="chapter_title ltr"><h1>Jesús plenamente Dios se vuelve plenamente hombre</h1></div>
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

<p class="back">Comparta la GRAN visi&oacute;n de &quot;Una iglesia para cada ciudad y comunidad, y el Evangelio para cada persona&quot;.</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/images/standard/look-up.png" />
<div class="lesson-subtitle"><span class="up">Mirando para arriba</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary2" class="summary"><h2 class="up">+ Contexto</h2></div>
<div class="collapsed" id ="Text2">
<!-- end default revealSummary -->
<p class="back">Explique que la vida de Cristo se divide en 5 per&iacute;odos:</p>

<ol>
	<li class="back">Preparaci&oacute;n,</li>
	<li class="back">Fundamentos del Ministerio,</li>
	<li class="back">Entrenamiento ministerial,</li>
	<li class="back">Expansi&oacute;n del alcance,</li>
	<li class="back">Multiplicaci&oacute;n del liderazgo</li>
</ol>

</div>

<h2 class="up">Leer</h2>

<ul>
	<li class="back">Lea o vea <strong>Juan 1:1-14</strong> dos veces mientras todos escuchan</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Lee Juan 1:1-14</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<div>
<h3>El Verbo se hizo hombre</h3>

<p><sup class="versenum">1 </sup>En el principio ya exist&iacute;a el Verbo,<br />
&nbsp;&nbsp;&nbsp;&nbsp;y el Verbo estaba con Dios,<br />
&nbsp;&nbsp;&nbsp;&nbsp;y el Verbo era Dios.<br />
<sup class="versenum">2&nbsp;</sup>&Eacute;l estaba con Dios en el principio.<br />
<sup class="versenum">3&nbsp;</sup>Por medio de &eacute;l todas las cosas fueron creadas;<br />
&nbsp;&nbsp;&nbsp;&nbsp;sin &eacute;l, nada de lo creado lleg&oacute; a existir.<br />
<sup class="versenum">4&nbsp;</sup>En &eacute;l estaba la vida,<br />
&nbsp;&nbsp;&nbsp;&nbsp;y la vida era la luz de la humanidad.<br />
<sup class="versenum">5&nbsp;</sup>Esta luz resplandece en las tinieblas,<br />
&nbsp;&nbsp;&nbsp;&nbsp;y las tinieblas no han podido extinguirla.</p>
</div>

<p><sup class="versenum">6&nbsp;</sup>Vino un hombre llamado Juan. Dios lo envi&oacute;<sup class="versenum">7&nbsp;</sup>como testigo para dar testimonio de la luz, a fin de que por medio de &eacute;l todos creyeran.<sup class="versenum">8&nbsp;</sup>Juan no era la luz, sino que vino para dar testimonio de la luz.<sup class="versenum">9&nbsp;</sup>Esa luz verdadera, la que alumbra a todo ser humano, ven&iacute;a a este mundo.</p>

<p><sup class="versenum">10&nbsp;</sup>El que era la luz ya estaba en el mundo, y el mundo fue creado por medio de &eacute;l, pero el mundo no lo reconoci&oacute;.<sup class="versenum">11&nbsp;</sup>Vino a lo que era suyo, pero los suyos no lo recibieron.<sup class="versenum">12&nbsp;</sup>Mas a cuantos lo recibieron, a los que creen en su nombre, les dio el derecho de ser hijos de Dios.<sup class="versenum">13&nbsp;</sup>Estos no nacen de la sangre, ni por deseos naturales, ni por voluntad humana, sino que nacen de Dios.</p>

<p><sup class="versenum">14&nbsp;</sup>Y el Verbo se hizo hombre y habit&oacute; entre nosotros. Y hemos contemplado su gloria, la gloria que corresponde al Hijo unig&eacute;nito del Padre, lleno de gracia y de verdad.</p>
<!-- end bible -->

<p class="bible"></p>

</div>


<button id="MC2/spa/video/multiply2/201.mp4" type="button" class="external-movie">
         Mira &nbsp;Juan 1:1-14&nbsp;</button>
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
<ul>
	<li class="nobreak-final-final">Lee <span class="popup-link" @click = "popUp('pop3')"> Filipenses 2:5-11</span>

	<div class="popup invisible" id="pop3"><!-- begin bible -->
	<div>
	<p><sup class="versenum">5&nbsp;</sup>La actitud de ustedes debe ser como la de Cristo Jes&uacute;s,</p>

	<p><sup class="versenum">6&nbsp;</sup>quien, siendo por naturaleza Dios,<br />
	&nbsp;&nbsp;&nbsp;&nbsp;no consider&oacute; el ser igual a Dios como algo a qu&eacute; aferrarse.<br />
	<sup class="versenum">7&nbsp;</sup>Por el contrario, se rebaj&oacute; voluntariamente,<br />
	&nbsp;&nbsp;&nbsp;&nbsp;tomando la naturaleza de siervo<br />
	&nbsp;&nbsp;&nbsp;&nbsp;y haci&eacute;ndose semejante a los seres humanos.<br />
	<sup class="versenum">8&nbsp;</sup>Y, al manifestarse como hombre,<br />
	&nbsp;&nbsp;&nbsp;&nbsp;se humill&oacute; a s&iacute; mismo<br />
	y se hizo obediente hasta la muerte,<br />
	&nbsp;&nbsp;&nbsp;&nbsp;&iexcl;y muerte de cruz!<br />
	<sup class="versenum">9&nbsp;</sup>Por eso Dios lo exalt&oacute; hasta lo sumo<br />
	&nbsp;&nbsp;&nbsp;&nbsp;y le otorg&oacute; el nombre<br />
	&nbsp;&nbsp;&nbsp;&nbsp;que est&aacute; sobre todo nombre,<br />
	<sup class="versenum">10&nbsp;</sup>para que ante el nombre de Jes&uacute;s<br />
	&nbsp;&nbsp;&nbsp;&nbsp;se doble toda rodilla<br />
	en el cielo y en la tierra<br />
	&nbsp;&nbsp;&nbsp;&nbsp;y debajo de la tierra,<br />
	<sup class="versenum">11&nbsp;</sup>y toda lengua confiese que Jesucristo es el Se&ntilde;or,<br />
	&nbsp;&nbsp;&nbsp;&nbsp;para gloria de Dios Padre.</p>
	</div>
	<!-- end bible --></div>
	. Dios todopoderoso tom&oacute; forma humana. Eligi&oacute; comenzar como un beb&eacute; y no como un hombre adulto. La Biblia dice que &Eacute;l &quot;se despoj&oacute; a s&iacute; mismo&quot; y se puso un cuerpo para vivir aqu&iacute; con nosotros. Sin embargo, &Eacute;l nunca dej&oacute; de ser completamente Dios. &Eacute;l segu&iacute;a siendo Todopoderoso, Omnisciente, Omnipresente. Sin embargo, &Eacute;l oculto Su Deidad y limit&oacute; Sus poderes para convertirse en un verdadero humano.</li>
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
<p>Practique las habilidades necesarias o temas previos para ayudar a prepararse para ministrar a los dem&aacute;s:</p>

<ul class="forward">
	<li>Orar, Cuidar, Compartir</li>
	<li>Compartir el Evangelio</li>
	<li>Estudios B&iacute;blicos Fundacionales.</li>
</ul>

</div>

<h2 class="forward">Ir a la Misi&oacute;nn</h2>

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

			<td class="social" @click="share('lesson', 'Jesús plenamente Dios se vuelve plenamente hombre: ', '/content/M2/spa/multiply2/multiply201.html')">
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