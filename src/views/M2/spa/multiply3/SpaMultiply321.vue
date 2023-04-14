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
                        <div class="chapter_number ltr"><h1>21.</h1></div>
                        <div class="chapter_title ltr"><h1>Pedro explica sus acciones</h1></div>
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
	<li class="back">Lea o vea <strong>Hechos 11:1-18</strong> dos veces mientras todos escuchan</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Lee Hechos 11:1-18</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>Pedro explica su comportamiento</h3>

<p><sup class="versenum">1 </sup>Los ap&oacute;stoles y los hermanos de toda Judea se enteraron de que tambi&eacute;n los gentiles hab&iacute;an recibido la palabra de Dios.<sup class="versenum">2&nbsp;</sup>As&iacute; que cuando Pedro subi&oacute; a Jerusal&eacute;n, los defensores de la circuncisi&oacute;n lo criticaron<sup class="versenum">3&nbsp;</sup>diciendo:</p>

<p>&mdash;Entraste en casa de hombres incircuncisos y comiste con ellos.</p>

<p><sup class="versenum">4&nbsp;</sup>Entonces Pedro comenz&oacute; a explicarles paso a paso lo que hab&iacute;a sucedido:</p>

<p><sup class="versenum">5&nbsp;</sup>&mdash;Yo estaba orando en la ciudad de Jope y tuve en &eacute;xtasis una visi&oacute;n. Vi que del cielo descend&iacute;a algo parecido a una gran s&aacute;bana que, suspendida por las cuatro puntas, bajaba hasta donde yo estaba.<sup class="versenum">6&nbsp;</sup>Me fij&eacute; en lo que hab&iacute;a en ella, y vi cuadr&uacute;pedos, fieras, reptiles y aves.<sup class="versenum">7&nbsp;</sup>Luego o&iacute; una voz que me dec&iacute;a: &ldquo;Lev&aacute;ntate, Pedro; mata y come&rdquo;.<sup class="versenum">8&nbsp;</sup>Repliqu&eacute;: &ldquo;&iexcl;De ninguna manera, Se&ntilde;or! Jam&aacute;s ha entrado en mi boca nada impuro o inmundo&rdquo;.<sup class="versenum">9&nbsp;</sup>Por segunda vez insisti&oacute; la voz del cielo: &ldquo;Lo que Dios ha purificado, t&uacute; no lo llames impuro&rdquo;.<sup class="versenum">10&nbsp;</sup>Esto sucedi&oacute; tres veces, y luego todo volvi&oacute; a ser llevado al cielo.</p>

<p><sup class="versenum">11&nbsp;</sup>&raquo;En aquel momento se presentaron en la casa donde yo estaba tres hombres que desde Cesarea hab&iacute;an sido enviados a verme.<sup class="versenum">12&nbsp;</sup>El Esp&iacute;ritu me dijo que fuera con ellos sin dudar. Tambi&eacute;n fueron conmigo estos seis hermanos, y entramos en la casa de aquel hombre.<sup class="versenum">13&nbsp;</sup>&Eacute;l nos cont&oacute; c&oacute;mo en su casa se le hab&iacute;a aparecido un &aacute;ngel que le dijo: &ldquo;Manda a alguien a Jope para hacer venir a Sim&oacute;n, apodado Pedro.<sup class="versenum">14&nbsp;</sup>&Eacute;l te traer&aacute; un mensaje mediante el cual ser&aacute;n salvos t&uacute; y toda tu familia&rdquo;.</p>

<p><sup class="versenum">15&nbsp;</sup>&raquo;Cuando comenc&eacute; a hablarles, el Esp&iacute;ritu Santo descendi&oacute; sobre ellos tal como al principio descendi&oacute; sobre nosotros.<sup class="versenum">16&nbsp;</sup>Entonces record&eacute; lo que hab&iacute;a dicho el Se&ntilde;or: &ldquo;Juan bautiz&oacute; con agua, pero ustedes ser&aacute;n bautizados con el Esp&iacute;ritu Santo&rdquo;.<sup class="versenum">17&nbsp;</sup>Por tanto, si Dios les ha dado a ellos el mismo don que a nosotros al creer en el Se&ntilde;or Jesucristo, &iquest;qui&eacute;n soy yo para pretender estorbar a Dios?&raquo;</p>

<p><sup class="versenum">18&nbsp;</sup>Al o&iacute;r esto, se apaciguaron y alabaron a Dios diciendo:</p>

<p>&mdash;&iexcl;As&iacute; que tambi&eacute;n a los gentiles les ha concedido Dios el arrepentimiento para vida!</p>
<!-- end bible -->

<p class="bible"></p>

</div>


<button id="MC2/spa/video/multiply3/321.mp4" type="button" class="external-movie">
         Mira &nbsp;Hechos 11:1-18&nbsp;</button>
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
<li class="nobreak-final-final">La noticia se extendi&oacute; r&aacute;pidamente a Jerusal&eacute;n de la nueva obra entre los gentiles. Pedro regresa a casa de su gira de ministerio (<span class="popup-link" @click = "popUp('pop3')"> Hechos 8:32</span>) 

<div class="popup invisible" id="pop3"><!-- begin bible -->
<div>
<p><sup class="versenum">32&nbsp;</sup>El pasaje de la Escritura que estaba leyendo era el siguiente:</p>

<p>&laquo;Como oveja, fue llevado al matadero;<br />
&nbsp;&nbsp;&nbsp;&nbsp;y como cordero que enmudece ante su trasquilador,<br />
&nbsp;&nbsp;&nbsp;&nbsp;ni siquiera abri&oacute; su boca.</p>
</div>
<!-- end bible --></div>
y es confrontado por creyentes jud&iacute;os por violar las leyes jud&iacute;as acerca de entrar en el hogar de un gentil, comer con ellos e incluso quedarse con ellos. Algunos creyentes todav&iacute;a no entend&iacute;an las implicaciones de la misi&oacute;n del Evangelio. Dudaban del coraz&oacute;n del Se&ntilde;or por los pueblos no jud&iacute;os. Jes&uacute;s us&oacute; este evento para comenzar un proceso de romper su enfoque en su propia cultura que era una barrera para la misi&oacute;n global de hacer disc&iacute;pulos de todos los pueblos. Fue la combinaci&oacute;n de la visi&oacute;n que Pedro recibi&oacute;, la ense&ntilde;anza del Se&ntilde;or y la evidencia de la presencia del Esp&iacute;ritu Santo lo que demostr&oacute; que Dios hab&iacute;a aceptado plenamente a los gentiles. Despu&eacute;s de escuchar esto, los creyentes jud&iacute;os finalmente elogiaron a Dios por proporcionar salvaci&oacute;n a los gentiles. Su cr&iacute;tica y preocupaci&oacute;n se convirtieron en adoraci&oacute;n.

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

			<td class="social" @click="share('lesson', 'Pedro explica sus acciones: ', '/content/M2/spa/multiply3/multiply321.html')">
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