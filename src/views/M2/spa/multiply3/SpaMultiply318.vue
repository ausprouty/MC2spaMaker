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
                        <div class="chapter_number ltr"><h1>18.</h1></div>
                        <div class="chapter_title ltr"><h1>Pedro visita a los creyentes en Judea</h1></div>
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

<ul><li class="nobreak-final-final">(Opcional) Jesucristo es el Se&ntilde;or, para la gloria de Dios Padre. &Eacute;l quiere que todos los hombres sean salvos y lleguen al conocimiento de la verdad. Porque hay un solo Dios y un mediador tambi&eacute;n entre Dios y el hombre, el hombre Jesucristo, que se entreg&oacute; a s&iacute; mismo como rescate por todos. (<span class="popup-link" @click = "popUp('pop1')"> Filipenses 2:11b</span>;

<div class="popup invisible" id="pop1"><!-- begin bible -->
<div>
<p><sup class="versenum">11&nbsp; </sup>&nbsp;...&nbsp; &nbsp;para gloria de Dios Padre.</p>
</div>
<!-- end bible --></div>
&nbsp;<span class="popup-link" @click = "popUp('pop2')"> 1 Timoteo 2:4-6a)</span>

<div class="popup invisible" id="pop2"><!-- begin bible -->
<p><sup class="versenum">4&nbsp;</sup>pues &eacute;l quiere que todos sean salvos y lleguen a conocer la verdad.<sup class="versenum">5&nbsp;</sup>Porque hay un solo Dios y un solo mediador entre Dios y los hombres, Jesucristo hombre,<sup class="versenum">6&nbsp;</sup>quien dio su vida como rescate por todos. Este testimonio Dios lo ha dado a su debido tiempo,</p>
</div>

</li></ul>

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
	<li class="back">Lea o vea <strong>Hechos 9:32-43</strong> dos veces mientras todos escuchan</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Lee Hechos 9:32-43</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>Eneas y Dorcas</h3>

<p><sup class="versenum">32&nbsp;</sup>Pedro, que estaba recorriendo toda la regi&oacute;n, fue tambi&eacute;n a visitar a los santos que viv&iacute;an en Lida.<sup class="versenum">33&nbsp;</sup>All&iacute; encontr&oacute; a un paral&iacute;tico llamado Eneas, que llevaba ocho a&ntilde;os en cama.<sup class="versenum">34&nbsp;</sup>&laquo;Eneas &mdash;le dijo Pedro&mdash;, Jesucristo te sana. Lev&aacute;ntate y tiende tu cama&raquo;. Y al instante se levant&oacute;.<sup class="versenum">35&nbsp;</sup>Todos los que viv&iacute;an en Lida y en Sar&oacute;n lo vieron, y se convirtieron al Se&ntilde;or.</p>

<p><sup class="versenum">36&nbsp;</sup>Hab&iacute;a en Jope una disc&iacute;pula llamada Tabita (que traducido es Dorcas). Esta se esmeraba en hacer buenas obras y en ayudar a los pobres.<sup class="versenum">37&nbsp;</sup>Sucedi&oacute; que en esos d&iacute;as cay&oacute; enferma y muri&oacute;. Pusieron el cad&aacute;ver, despu&eacute;s de lavarlo, en un cuarto de la planta alta.<sup class="versenum">38&nbsp;</sup>Y como Lida estaba cerca de Jope, los disc&iacute;pulos, al enterarse de que Pedro se encontraba en Lida, enviaron a dos hombres a rogarle: &laquo;&iexcl;Por favor, venga usted a Jope en seguida!&raquo;</p>

<p><sup class="versenum">39&nbsp;</sup>Sin demora, Pedro se fue con ellos, y cuando lleg&oacute; lo llevaron al cuarto de arriba. Todas las viudas se presentaron, llorando y mostr&aacute;ndole las t&uacute;nicas y otros vestidos que Dorcas hab&iacute;a hecho cuando a&uacute;n estaba con ellas.</p>

<p><sup class="versenum">40&nbsp;</sup>Pedro hizo que todos salieran del cuarto; luego se puso de rodillas y or&oacute;. Volvi&eacute;ndose hacia la muerta, dijo: &laquo;Tabita, lev&aacute;ntate&raquo;. Ella abri&oacute; los ojos y, al ver a Pedro, se incorpor&oacute;.<sup class="versenum">41&nbsp;</sup>&Eacute;l, tom&aacute;ndola de la mano, la levant&oacute;. Luego llam&oacute; a los creyentes y a las viudas, a quienes la present&oacute; viva.<sup class="versenum">42&nbsp;</sup>La noticia se difundi&oacute; por todo Jope, y muchos creyeron en el Se&ntilde;or.<sup class="versenum">43&nbsp;</sup>Pedro se qued&oacute; en Jope un buen tiempo, en casa de un tal Sim&oacute;n, que era curtidor.</p>
<!-- end bible -->

<p class="bible"></p>

</div>


<button id="MC2/spa/video/multiply3/318.mp4" type="button" class="external-movie">
         Mira &nbsp;Hechos 9:32-43&nbsp;</button>
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
<!-- end default revealSummary --><ul>
<li class="nobreak-final-final">Pedro comienza a viajar fuera de Jerusal&eacute;n para visitar a los creyentes que se han establecido en otras ciudades. El Esp&iacute;ritu lo usa para realizar muchos milagros y llevar a muchas personas a Cristo en Lidia y Jope. Estas son las primeras iglesias fuera de Jerusal&eacute;n que Pedro ayuda a comenzar. Dirigido por el Esp&iacute;ritu a trav&eacute;s de la oraci&oacute;n, Pedro levanta a Tabita de la misma manera que vio a Jes&uacute;s resucitar a la hija de Jairo (<span class="popup-link" @click = "popUp('pop3')"> Marcos 5:38-42</span>). 

<div class="popup invisible" id="pop3"><!-- begin bible -->
<p><sup class="versenum">38&nbsp;</sup>Cuando llegaron a la casa del jefe de la sinagoga, Jes&uacute;s not&oacute; el alboroto, y que la gente lloraba y daba grandes alaridos.<sup class="versenum">39&nbsp;</sup>Entr&oacute; y les dijo:</p>

<p>&mdash;&iquest;Por qu&eacute; tanto alboroto y llanto? La ni&ntilde;a no est&aacute; muerta, sino dormida.</p>

<p><sup class="versenum">40&nbsp;</sup>Entonces empezaron a burlarse de &eacute;l, pero &eacute;l los sac&oacute; a todos, tom&oacute; consigo al padre y a la madre de la ni&ntilde;a y a los disc&iacute;pulos que estaban con &eacute;l, y entr&oacute; adonde estaba la ni&ntilde;a.<sup class="versenum">41&nbsp;</sup>La tom&oacute; de la mano y le dijo:</p>

<p>&mdash;<em class="transliteration">Talita cum</em> (que significa: Ni&ntilde;a, a ti te digo, &iexcl;lev&aacute;ntate!).</p>

<p><sup class="versenum">42&nbsp;</sup>La ni&ntilde;a, que ten&iacute;a doce a&ntilde;os, se levant&oacute; en seguida y comenz&oacute; a andar. Ante este hecho todos se llenaron de asombro.</p>
<!-- end bible --></div>
 Hasta ahora, hemos visto muchos ejemplos de lo que Jes&uacute;s dijo que suceder&iacute;a cuando el Esp&iacute;ritu viniera, &quot;estas obras har&eacute; y obras a&uacute;n mayores&quot; (<span class="popup-link" @click = "popUp('pop4')"> Juan 14:12</span>). 

<div class="popup invisible" id="pop4"><!-- begin bible -->
<p><sup class="versenum">12&nbsp;</sup>Ciertamente les aseguro que el que cree en m&iacute; las obras que yo hago tambi&eacute;n &eacute;l las har&aacute;, y aun las har&aacute; mayores, porque yo vuelvo al Padre.</p>
<!-- end bible --></div>
Tabita es un ejemplo de una mujer que fue activa en el ministerio cuidando a los dem&aacute;s y ayudando a mantener a las viudas en el &aacute;rea. Pedro muestra crecimiento en su comprensi&oacute;n de la gracia al estar dispuesto a quedarse en la casa de un curtidor, una profesi&oacute;n vista como impura por los t&eacute;rminos culturales religiosos jud&iacute;os.

</li></ul>



</div>
<p class="up"><em>Practique el dar y la Santa Cena aqu&iacute; o en la secci&oacute;n Preparaci&oacute;n para la Misi&oacute;n</em></p>

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

			<td class="social" @click="share('lesson', 'Pedro visita a los creyentes en Judea: ', '/content/M2/spa/multiply3/multiply318.html')">
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