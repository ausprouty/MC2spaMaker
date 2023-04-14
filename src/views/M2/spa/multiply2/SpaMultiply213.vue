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
                        <div class="chapter_number ltr"><h1>13.</h1></div>
                        <div class="chapter_title ltr"><h1>La cosecha está madura</h1></div>
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
	<li class="back">Lea o vea <strong>Juan 4:7-42</strong> dos veces mientras todos escuchan</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Lee Juan 4:7-42</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>Jes&uacute;s y la samaritana</h3>

<p><sup class="versenum">7-8&nbsp;</sup>Sus disc&iacute;pulos hab&iacute;an ido al pueblo a comprar comida.</p>

<p>En eso lleg&oacute; a sacar agua una mujer de Samaria, y Jes&uacute;s le dijo:</p>

<p>&mdash;Dame un poco de agua.</p>

<p><sup class="versenum">9&nbsp;</sup>Pero, como los jud&iacute;os no usan nada en com&uacute;n con los samaritanos, la mujer le respondi&oacute;:</p>

<p>&mdash;&iquest;C&oacute;mo se te ocurre pedirme agua, si t&uacute; eres jud&iacute;o y yo soy samaritana?</p>

<p><sup class="versenum">10&nbsp;</sup>&mdash;Si supieras lo que Dios puede dar, y conocieras al que te est&aacute; pidiendo agua &mdash;contest&oacute; Jes&uacute;s&mdash;, t&uacute; le habr&iacute;as pedido a &eacute;l, y &eacute;l te habr&iacute;a dado agua que da vida.</p>

<p><sup class="versenum">11&nbsp;</sup>&mdash;Se&ntilde;or, ni siquiera tienes con qu&eacute; sacar agua, y el pozo es muy hondo; &iquest;de d&oacute;nde, pues, vas a sacar esa agua que da vida?<sup class="versenum">12&nbsp;</sup>&iquest;Acaso eres t&uacute; superior a nuestro padre Jacob, que nos dej&oacute; este pozo, del cual bebieron &eacute;l, sus hijos y su ganado?</p>

<p><sup class="versenum">13&nbsp;</sup>&mdash;Todo el que beba de esta agua volver&aacute; a tener sed &mdash;respondi&oacute; Jes&uacute;s&mdash;,<sup class="versenum">14&nbsp;</sup>pero el que beba del agua que yo le dar&eacute; no volver&aacute; a tener sed jam&aacute;s, sino que dentro de &eacute;l esa agua se convertir&aacute; en un manantial del que brotar&aacute; vida eterna.</p>

<p><sup class="versenum">15&nbsp;</sup>&mdash;Se&ntilde;or, dame de esa agua para que no vuelva a tener sed ni siga viniendo aqu&iacute; a sacarla.</p>

<p><sup class="versenum">16&nbsp;</sup>&mdash;Ve a llamar a tu esposo, y vuelve ac&aacute; &mdash;le dijo Jes&uacute;s.</p>

<p><sup class="versenum">17&nbsp;</sup>&mdash;No tengo esposo &mdash;respondi&oacute; la mujer.</p>

<p>&mdash;Bien has dicho que no tienes esposo.<sup class="versenum">18&nbsp;</sup>Es cierto que has tenido cinco, y el que ahora tienes no es tu esposo. En esto has dicho la verdad.</p>

<p><sup class="versenum">19&nbsp;</sup>&mdash;Se&ntilde;or, me doy cuenta de que t&uacute; eres profeta.<sup class="versenum">20&nbsp;</sup>Nuestros antepasados adoraron en este monte, pero ustedes los jud&iacute;os dicen que el lugar donde debemos adorar est&aacute; en Jerusal&eacute;n.</p>

<p><sup class="versenum">21&nbsp;</sup>&mdash;Cr&eacute;eme, mujer, que se acerca la hora en que ni en este monte ni en Jerusal&eacute;n adorar&aacute;n ustedes al Padre.<sup class="versenum">22&nbsp;</sup>Ahora ustedes adoran lo que no conocen; nosotros adoramos lo que conocemos, porque la salvaci&oacute;n proviene de los jud&iacute;os.<sup class="versenum">23&nbsp;</sup>Pero se acerca la hora, y ha llegado ya, en que los verdaderos adoradores rendir&aacute;n culto al Padre en esp&iacute;ritu y en verdad, porque as&iacute; quiere el Padre que sean los que le adoren.<sup class="versenum">24&nbsp;</sup>Dios es esp&iacute;ritu, y quienes lo adoran deben hacerlo en esp&iacute;ritu y en verdad.</p>

<p><sup class="versenum">25&nbsp;</sup>&mdash;S&eacute; que viene el Mes&iacute;as, al que llaman el Cristo &mdash;respondi&oacute; la mujer&mdash;. Cuando &eacute;l venga nos explicar&aacute; todas las cosas.</p>

<p><sup class="versenum">26&nbsp;</sup>&mdash;Ese soy yo, el que habla contigo &mdash;le dijo Jes&uacute;s.</p>

<h3>Los disc&iacute;pulos vuelven a reunirse con Jes&uacute;s</h3>

<p><sup class="versenum">27&nbsp;</sup>En esto llegaron sus disc&iacute;pulos y se sorprendieron de verlo hablando con una mujer, aunque ninguno le pregunt&oacute;: &laquo;&iquest;Qu&eacute; pretendes?&raquo; o &laquo;&iquest;De qu&eacute; hablas con ella?&raquo;</p>

<p><sup class="versenum">28&nbsp;</sup>La mujer dej&oacute; su c&aacute;ntaro, volvi&oacute; al pueblo y le dec&iacute;a a la gente:</p>

<p><sup class="versenum">29&nbsp;</sup>&mdash;Vengan a ver a un hombre que me ha dicho todo lo que he hecho. &iquest;No ser&aacute; este el Cristo?</p>

<p><sup class="versenum">30&nbsp;</sup>Salieron del pueblo y fueron a ver a Jes&uacute;s.<sup class="versenum">31&nbsp;</sup>Mientras tanto, sus disc&iacute;pulos le insist&iacute;an:</p>

<p>&mdash;Rab&iacute;, come algo.</p>

<p><sup class="versenum">32&nbsp;</sup>&mdash;Yo tengo un alimento que ustedes no conocen &mdash;replic&oacute; &eacute;l.</p>

<p><sup class="versenum">33&nbsp;</sup>&laquo;&iquest;Le habr&aacute;n tra&iacute;do algo de comer?&raquo;, comentaban entre s&iacute; los disc&iacute;pulos.</p>

<p><sup class="versenum">34&nbsp;</sup>&mdash;Mi alimento es hacer la voluntad del que me envi&oacute; y terminar su obra &mdash;les dijo Jes&uacute;s&mdash;.<sup class="versenum">35&nbsp;</sup>&iquest;No dicen ustedes: &ldquo;Todav&iacute;a faltan cuatro meses para la cosecha&rdquo;? Yo les digo: &iexcl;Abran los ojos y miren los campos sembrados! Ya la cosecha est&aacute; madura;<sup class="versenum">36&nbsp;</sup>ya el segador recibe su salario y recoge el fruto para vida eterna. Ahora tanto el sembrador como el segador se alegran juntos.<sup class="versenum">37&nbsp;</sup>Porque como dice el refr&aacute;n: &ldquo;Uno es el que siembra y otro el que cosecha&rdquo;.<sup class="versenum">38&nbsp;</sup>Yo los he enviado a ustedes a cosechar lo que no les cost&oacute; ning&uacute;n trabajo. Otros se han fatigado trabajando, y ustedes han cosechado el fruto de ese trabajo.</p>

<h3>Muchos samaritanos creen en Jes&uacute;s</h3>

<p><sup class="versenum">39&nbsp;</sup>Muchos de los samaritanos que viv&iacute;an en aquel pueblo creyeron en &eacute;l por el testimonio que daba la mujer: &laquo;Me dijo todo lo que he hecho&raquo;.<sup class="versenum">40&nbsp;</sup>As&iacute; que cuando los samaritanos fueron a su encuentro le insistieron en que se quedara con ellos. Jes&uacute;s permaneci&oacute; all&iacute; dos d&iacute;as,<sup class="versenum">41&nbsp;</sup>y muchos m&aacute;s llegaron a creer por lo que &eacute;l mismo dec&iacute;a.</p>

<p><sup class="versenum">42&nbsp;</sup>&mdash;Ya no creemos solo por lo que t&uacute; dijiste &mdash;le dec&iacute;an a la mujer&mdash;; ahora lo hemos o&iacute;do nosotros mismos, y sabemos que verdaderamente este es el Salvador del mundo.</p>
<!-- end bible -->

<p class="bible"></p>

</div>


<button id="MC2/spa/video/multiply2/213.mp4" type="button" class="external-movie">
         Mira &nbsp;Juan 4:7-42&nbsp;</button>
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

<p class="up">Jes&uacute;s involucr&oacute; a sus disc&iacute;pulos desde el principio en testificar acerca de &Eacute;l y bautizar a las personas en el creciente movimiento. Fue su primera asignaci&oacute;n ministerial. Cuando Jes&uacute;s se enter&oacute; de que su creciente movimiento hab&iacute;a llegado a la atenci&oacute;n de los l&iacute;deres religiosos en Jerusal&eacute;n, se retir&oacute; con sus disc&iacute;pulos llev&aacute;ndolos a trav&eacute;s del &aacute;rea no jud&iacute;a de Samaria. Los jud&iacute;os ten&iacute;an un tremendo odio y prejuicio contra el pueblo samaritano. Jes&uacute;s rompi&oacute; dos normas culturales: &iexcl;habl&oacute; con un samaritano y con una mujer! Tanto la samaritana como los disc&iacute;pulos se sorprendieron por esto. Por ejemplo, Jes&uacute;s estaba remodelando la mentalidad de sus disc&iacute;pulos. No pod&iacute;an ver a la persona preparada por Dios y la cosecha a su alrededor.</p>

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

			<td class="social" @click="share('lesson', 'La cosecha está madura: ', '/content/M2/spa/multiply2/multiply213.html')">
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