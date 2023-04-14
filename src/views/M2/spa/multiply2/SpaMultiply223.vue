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
                        <div class="chapter_number ltr"><h1>23.</h1></div>
                        <div class="chapter_title ltr"><h1>Sexta expedición para pescar hombres</h1></div>
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
	<li class="back">Lea o vea <strong>Lucas 5:27-39</strong> dos veces mientras todos escuchan</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Lee Lucas 5:27-39</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>Llamamiento de Lev&iacute;</h3>

<p><sup class="versenum">27&nbsp;</sup>Despu&eacute;s de esto sali&oacute; Jes&uacute;s y se fij&oacute; en un recaudador de impuestos llamado Lev&iacute;, sentado a la mesa donde cobraba.</p>

<p>&mdash;S&iacute;gueme &mdash;le dijo Jes&uacute;s.</p>

<p><sup class="versenum">28&nbsp;</sup>Y Lev&iacute; se levant&oacute;, lo dej&oacute; todo y lo sigui&oacute;.</p>

<p><sup class="versenum">29&nbsp;</sup>Luego Lev&iacute; le ofreci&oacute; a Jes&uacute;s un gran banquete en su casa, y hab&iacute;a all&iacute; un grupo numeroso de recaudadores de impuestos y otras personas que estaban comiendo con ellos.<sup class="versenum">30&nbsp;</sup>Pero los fariseos y los maestros de la ley que eran de la misma secta les reclamaban a los disc&iacute;pulos de Jes&uacute;s:</p>

<p>&mdash;&iquest;Por qu&eacute; comen y beben ustedes con recaudadores de impuestos y pecadores?</p>

<p><sup class="versenum">31&nbsp;</sup>&mdash;No son los sanos los que necesitan m&eacute;dico, sino los enfermos &mdash;les contest&oacute; Jes&uacute;s&mdash;.<sup class="versenum">32&nbsp;</sup>No he venido a llamar a justos, sino a pecadores para que se arrepientan.</p>

<h3>Le preguntan a Jes&uacute;s sobre el ayuno</h3>

<p><sup class="versenum">33&nbsp;</sup>Algunos le dijeron a Jes&uacute;s:</p>

<p>&mdash;Los disc&iacute;pulos de Juan ayunan y oran con frecuencia, lo mismo que los disc&iacute;pulos de los fariseos, pero los tuyos se la pasan comiendo y bebiendo.</p>

<p><sup class="versenum">34&nbsp;</sup>Jes&uacute;s les replic&oacute;:</p>

<p>&mdash;&iquest;Acaso pueden obligar a los invitados del novio a que ayunen mientras &eacute;l est&aacute; con ellos?<sup class="versenum">35&nbsp;</sup>Llegar&aacute; el d&iacute;a en que se les quitar&aacute; el novio; en aquellos d&iacute;as s&iacute; ayunar&aacute;n.</p>

<p><sup class="versenum">36&nbsp;</sup>Les cont&oacute; esta par&aacute;bola:</p>

<p>&mdash;Nadie quita un retazo de un vestido nuevo para remendar un vestido viejo. De hacerlo as&iacute;, habr&aacute; rasgado el vestido nuevo, y el retazo nuevo no har&aacute; juego con el vestido viejo.<sup class="versenum">37&nbsp;</sup>Ni echa nadie vino nuevo en odres viejos. De hacerlo as&iacute;, el vino nuevo har&aacute; reventar los odres, se derramar&aacute; el vino y los odres se arruinar&aacute;n.<sup class="versenum">38&nbsp;</sup>M&aacute;s bien, el vino nuevo debe echarse en odres nuevos.<sup class="versenum">39&nbsp;</sup>Y nadie que haya bebido vino a&ntilde;ejo quiere el nuevo, porque dice: &ldquo;El a&ntilde;ejo es mejor&rdquo;.</p>
<!-- end bible -->

<p class="bible"></p>

</div>


<button id="MC2/spa/video/multiply2/223.mp4" type="button" class="external-movie">
         Mira &nbsp;Lucas 5:27-39&nbsp;</button>
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

<p class="up">Mateo era tambi&eacute;n un jud&iacute;o conocido como Lev&iacute;, hijo de Alfeo. Era poderoso, comisionado, confiable, rico y protegido por Roma para recaudar impuestos del pueblo de Israel. Pero como recaudador de impuestos, era un traidor y odiado por su propio pueblo. Vivi&oacute; en Cafarna&uacute;m. &Eacute;l hab&iacute;a estado observando a Jes&uacute;s y hab&iacute;a o&iacute;do hablar de todo lo que estaba haciendo. Tal vez &eacute;l ya hab&iacute;a estado considerando renunciar a todo para seguir a Jes&uacute;s. Claramente el Padre hab&iacute;a estado preparando su coraz&oacute;n porque respondi&oacute; al llamado de Jes&uacute;s a seguirlo. Inmediatamente, Mateo present&oacute; a Jes&uacute;s a sus amigos recaudadores de impuestos. En este sexto alcance, Jes&uacute;s arriesgue su reputaci&oacute;n al pasar tiempo con este grupo de odiados recaudadores de impuestos. Jes&uacute;s demostr&oacute; Su amor al modelar extendiendo la gracia a las personas odiadas. Jes&uacute;s amaba ser conocido como un amigo de los pecadores.</p>

<ul>
	<li class="nobreak-final-final">Estudio adicional: <span class="popup-link" @click = "popUp('pop3')"> Mateo 9:9-17</span>;&nbsp;

	<div class="popup invisible" id="pop3"><!-- begin bible -->
	<h3>Llamamiento de Mateo</h3>

	<p><sup class="versenum">9&nbsp;</sup>Al irse de all&iacute;, Jes&uacute;s vio a un hombre llamado Mateo, sentado a la mesa de recaudaci&oacute;n de impuestos. &laquo;S&iacute;gueme&raquo;, le dijo. Mateo se levant&oacute; y lo sigui&oacute;.</p>

	<p><sup class="versenum">10&nbsp;</sup>Mientras Jes&uacute;s estaba comiendo en casa de Mateo, muchos recaudadores de impuestos y pecadores llegaron y comieron con &eacute;l y sus disc&iacute;pulos.<sup class="versenum">11&nbsp;</sup>Cuando los fariseos vieron esto, les preguntaron a sus disc&iacute;pulos:</p>

	<p>&mdash;&iquest;Por qu&eacute; come su maestro con recaudadores de impuestos y con pecadores?</p>

	<p><sup class="versenum">12&nbsp;</sup>Al o&iacute;r esto, Jes&uacute;s les contest&oacute;:</p>

	<p>&mdash;No son los sanos los que necesitan m&eacute;dico, sino los enfermos.<sup class="versenum">13&nbsp;</sup>Pero vayan y aprendan qu&eacute; significa esto: &ldquo;Lo que pido de ustedes es misericordia y no sacrificios&rdquo;. Porque no he venido a llamar a justos, sino a pecadores.</p>

	<p><sup class="versenum">14&nbsp;</sup>Un d&iacute;a se le acercaron los disc&iacute;pulos de Juan y le preguntaron:</p>

	<p>&mdash;&iquest;C&oacute;mo es que nosotros y los fariseos ayunamos, pero no as&iacute; tus disc&iacute;pulos?</p>

	<p>Jes&uacute;s les contest&oacute;:</p>

	<p><sup class="versenum">15&nbsp;</sup>&mdash;&iquest;Acaso pueden estar de luto los invitados del novio mientras &eacute;l est&aacute; con ellos? Llegar&aacute; el d&iacute;a en que se les quitar&aacute; el novio; entonces s&iacute; ayunar&aacute;n.<sup class="versenum">16&nbsp;</sup>Nadie remienda un vestido viejo con un retazo de tela nueva, porque el remiendo fruncir&aacute; el vestido y la rotura se har&aacute; peor.<sup class="versenum">17&nbsp;</sup>Ni tampoco se echa vino nuevo en odres viejos. De hacerlo as&iacute;, se reventar&aacute;n los odres, se derramar&aacute; el vino y los odres se arruinar&aacute;n. M&aacute;s bien, el vino nuevo se echa en odres nuevos, y as&iacute; ambos se conservan.</p>
	<!-- end bible --></div>
	<span class="popup-link" @click = "popUp('pop4')"> Marcos 2:14-22</span>.

	<div class="popup invisible" id="pop4"><!-- begin bible -->
	<p><sup class="versenum">14&nbsp;</sup>Al pasar vio a Lev&iacute; hijo de Alfeo, donde este cobraba impuestos.</p>

	<p>&mdash;S&iacute;gueme &mdash;le dijo Jes&uacute;s.</p>

	<p>Y Lev&iacute; se levant&oacute; y lo sigui&oacute;.</p>

	<p><sup class="versenum">15&nbsp;</sup>Sucedi&oacute; que, estando Jes&uacute;s a la mesa en casa de Lev&iacute;, muchos recaudadores de impuestos y pecadores se sentaron con &eacute;l y sus disc&iacute;pulos, pues ya eran muchos los que lo segu&iacute;an.<sup class="versenum">16&nbsp;</sup>Cuando los maestros de la ley que eran fariseos vieron con qui&eacute;n com&iacute;a, les preguntaron a sus disc&iacute;pulos:</p>

	<p>&mdash;&iquest;Y este come con recaudadores de impuestos y con pecadores?</p>

	<p><sup class="versenum">17&nbsp;</sup>Al o&iacute;rlos, Jes&uacute;s les contest&oacute;:</p>

	<p>&mdash;No son los sanos los que necesitan m&eacute;dico, sino los enfermos. Y yo no he venido a llamar a justos, sino a pecadores.</p>

	<p><sup class="versenum">18&nbsp;</sup>Al ver que los disc&iacute;pulos de Juan y los fariseos ayunaban, algunos se acercaron a Jes&uacute;s y le preguntaron:</p>

	<p>&mdash;&iquest;C&oacute;mo es que los disc&iacute;pulos de Juan y de los fariseos ayunan, pero los tuyos no?</p>

	<p><sup class="versenum">19&nbsp;</sup>Jes&uacute;s les contest&oacute;:</p>

	<p>&mdash;&iquest;Acaso pueden ayunar los invitados del novio mientras &eacute;l est&aacute; con ellos? No pueden hacerlo mientras lo tienen con ellos.<sup class="versenum">20&nbsp;</sup>Pero llegar&aacute; el d&iacute;a en que se les quitar&aacute; el novio, y ese d&iacute;a s&iacute; ayunar&aacute;n.<sup class="versenum">21&nbsp;</sup>Nadie remienda un vestido viejo con un retazo de tela nueva. De hacerlo as&iacute;, el remiendo fruncir&aacute; el vestido y la rotura se har&aacute; peor.<sup class="versenum">22&nbsp;</sup>Ni echa nadie vino nuevo en odres viejos. De hacerlo as&iacute;, el vino har&aacute; reventar los odres y se arruinar&aacute;n tanto el vino como los odres. M&aacute;s bien, el vino nuevo se echa en odres nuevos.</p>
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

			<td class="social" @click="share('lesson', 'Sexta expedición para pescar hombres: ', '/content/M2/spa/multiply2/multiply223.html')">
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