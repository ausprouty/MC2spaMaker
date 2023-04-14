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
                        <div class="chapter_number ltr"><h1>14.</h1></div>
                        <div class="chapter_title ltr"><h1>Felipe hace discípulos y planta una iglesia en Samaria</h1></div>
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
	<li class="back">Lea o vea <strong>Hechos 8:4-25</strong> dos veces mientras todos escuchan</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Lee Hechos 8:4-25</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>Felipe en Samaria</h3>

<p><sup class="versenum">4&nbsp;</sup>Los que se hab&iacute;an dispersado predicaban la palabra por dondequiera que iban.<sup class="versenum">5&nbsp;</sup>Felipe baj&oacute; a una ciudad de Samaria y les anunciaba al Mes&iacute;as.<sup class="versenum">6&nbsp;</sup>Al o&iacute;r a Felipe y ver las se&ntilde;ales milagrosas que realizaba, mucha gente se reun&iacute;a y todos prestaban atenci&oacute;n a su mensaje.<sup class="versenum">7&nbsp;</sup>De muchos endemoniados los esp&iacute;ritus malignos sal&iacute;an dando alaridos, y un gran n&uacute;mero de paral&iacute;ticos y cojos quedaban sanos.<sup class="versenum">8&nbsp;</sup>Y aquella ciudad se llen&oacute; de alegr&iacute;a.</p>

<h3>Sim&oacute;n el hechicero</h3>

<p><sup class="versenum">9&nbsp;</sup>Ya desde antes hab&iacute;a en esa ciudad un hombre llamado Sim&oacute;n que, jact&aacute;ndose de ser un gran personaje, practicaba la hechicer&iacute;a y asombraba a la gente de Samaria.<sup class="versenum">10&nbsp;</sup>Todos, desde el m&aacute;s peque&ntilde;o hasta el m&aacute;s grande, le prestaban atenci&oacute;n y exclamaban: &laquo;&iexcl;Este hombre es al que llaman el Gran Poder de Dios!&raquo;</p>

<p><sup class="versenum">11&nbsp;</sup>Lo segu&iacute;an porque por mucho tiempo los hab&iacute;a tenido deslumbrados con sus artes m&aacute;gicas.<sup class="versenum">12&nbsp;</sup>Pero, cuando creyeron a Felipe, que les anunciaba las buenas nuevas del reino de Dios y el nombre de Jesucristo, tanto hombres como mujeres se bautizaron.<sup class="versenum">13&nbsp;</sup>Sim&oacute;n mismo crey&oacute; y, despu&eacute;s de bautizarse, segu&iacute;a a Felipe por todas partes, asombrado de los grandes milagros y se&ntilde;ales que ve&iacute;a.</p>

<p><sup class="versenum">14&nbsp;</sup>Cuando los ap&oacute;stoles que estaban en Jerusal&eacute;n se enteraron de que los samaritanos hab&iacute;an aceptado la palabra de Dios, les enviaron a Pedro y a Juan.<sup class="versenum">15&nbsp;</sup>Estos, al llegar, oraron por ellos para que recibieran el Esp&iacute;ritu Santo,<sup class="versenum">16&nbsp;</sup>porque el Esp&iacute;ritu a&uacute;n no hab&iacute;a descendido sobre ninguno de ellos; solamente hab&iacute;an sido bautizados en el nombre del Se&ntilde;or Jes&uacute;s.<sup class="versenum">17&nbsp;</sup>Entonces Pedro y Juan les impusieron las manos, y ellos recibieron el Esp&iacute;ritu Santo.</p>

<p><sup class="versenum">18&nbsp;</sup>Al ver Sim&oacute;n que mediante la imposici&oacute;n de las manos de los ap&oacute;stoles se daba el Esp&iacute;ritu Santo, les ofreci&oacute; dinero<sup class="versenum">19&nbsp;</sup>y les pidi&oacute;:</p>

<p>&mdash;Denme tambi&eacute;n a m&iacute; ese poder, para que todos a quienes yo les imponga las manos reciban el Esp&iacute;ritu Santo.</p>

<p><sup class="versenum">20&nbsp;</sup>&mdash;&iexcl;Que tu dinero perezca contigo &mdash;le contest&oacute; Pedro&mdash;, porque intentaste comprar el don de Dios con dinero!<sup class="versenum">21&nbsp;</sup>No tienes arte ni parte en este asunto, porque no eres &iacute;ntegro delante de Dios.<sup class="versenum">22&nbsp;</sup>Por eso, arrepi&eacute;ntete de tu maldad y ruega al Se&ntilde;or. Tal vez te perdone el haber tenido esa mala intenci&oacute;n.<sup class="versenum">23&nbsp;</sup>Veo que vas camino a la amargura y a la esclavitud del pecado.</p>

<p><sup class="versenum">24&nbsp;</sup>&mdash;Rueguen al Se&ntilde;or por m&iacute; &mdash;respondi&oacute; Sim&oacute;n&mdash;, para que no me suceda nada de lo que han dicho.</p>

<p><sup class="versenum">25&nbsp;</sup>Despu&eacute;s de testificar y proclamar la palabra del Se&ntilde;or, Pedro y Juan se pusieron en camino de vuelta a Jerusal&eacute;n, y de paso predicaron el evangelio en muchas poblaciones de los samaritanos.</p>
<!-- end bible -->

<p class="bible"></p>

</div>


<button id="MC2/spa/video/multiply3/314.mp4" type="button" class="external-movie">
         Mira Hechos 8:4-25</button>
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
<p class="up">Samaria era el nombre de una gran regi&oacute;n de Palestina al norte de Jerusal&eacute;n. Al igual que Esteban, Felipe fue uno de los siete elegidos para ayudar con el cuidado de las viudas en Jerusal&eacute;n. Vemos la efectividad del discipulado temprano al hacer las mismas cosas que los Ap&oacute;stoles estaban haciendo. &Eacute;l Felipe san&oacute; a muchos, expuls&oacute; demonios y predic&oacute; sobre el Reino. Esta es la primera vez en Hechos que el Evangelio cruza a una cultura no jud&iacute;a, por lo que Pedro y Juan fueron enviados a respaldar la obra que se estaba haciendo. El Se&ntilde;or us&oacute; esa experiencia para confirmar a Pedro y a Juan que el Evangelio era para todas las personas. Pedro y Juan se sintieron tan alentados por lo que el Se&ntilde;or estaba haciendo que iniciaran comunidades de nuevos creyentes en otras aldeas samaritanas en su viaje de regreso a Jerusal&eacute;n. Aprendemos que la muerte de Esteban y la persecuci&oacute;n que sigui&oacute; trabajaron juntas de acuerdo con el plan de Dios para expandir Su Reino y edificar Su iglesia.</p>



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

			<td class="social" @click="share('lesson', 'Felipe hace discípulos y planta una iglesia en Samaria: ', '/content/M2/spa/multiply3/multiply314.html')">
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