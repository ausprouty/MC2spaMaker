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
                        <div class="chapter_number ltr"><h1>40.</h1></div>
                        <div class="chapter_title ltr"><h1>El Reino Impacta la Economía en Éfeso</h1></div>
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
	<li class="back">Lea o vea <strong>Hechos 19:23-41</strong> dos veces mientras todos escuchan</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Lee Hechos 19:23-41</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>El disturbio en &Eacute;feso</h3>

<p><sup class="versenum">23&nbsp;</sup>Por aquellos d&iacute;as se produjo un gran disturbio a prop&oacute;sito del Camino.<sup class="versenum">24&nbsp;</sup>Un platero llamado Demetrio, que hac&iacute;a figuras en plata del templo de Artemisa, proporcionaba a los artesanos no poca ganancia.<sup class="versenum">25&nbsp;</sup>Los reuni&oacute; con otros obreros del ramo, y les dijo:</p>

<p>&mdash;Compa&ntilde;eros, ustedes saben que obtenemos buenos ingresos de este oficio.<sup class="versenum">26&nbsp;</sup>Les consta adem&aacute;s que el tal Pablo ha logrado persuadir a mucha gente no solo en &Eacute;feso, sino en casi toda la provincia de Asia. &Eacute;l sostiene que no son dioses los que se hacen con las manos.<sup class="versenum">27&nbsp;</sup>Ahora bien, no solo hay el peligro de que se desprestigie nuestro oficio, sino tambi&eacute;n de que el templo de la gran diosa Artemisa sea menospreciado, y que la diosa misma, a quien adoran toda la provincia de Asia y el mundo entero, sea despojada de su divina majestad.</p>

<p><sup class="versenum">28&nbsp;</sup>Al o&iacute;r esto, se enfurecieron y comenzaron a gritar:</p>

<p>&mdash;&iexcl;Grande es Artemisa de los efesios!</p>

<p><sup class="versenum">29&nbsp;</sup>En seguida toda la ciudad se alborot&oacute;. La turba en masa se precipit&oacute; en el teatro, arrastrando a Gayo y a Aristarco, compa&ntilde;eros de viaje de Pablo, que eran de Macedonia.<sup class="versenum">30&nbsp;</sup>Pablo quiso presentarse ante la multitud, pero los disc&iacute;pulos no se lo permitieron.<sup class="versenum">31&nbsp;</sup>Incluso algunas autoridades de la provincia, que eran amigos de Pablo, le enviaron un recado, rog&aacute;ndole que no se arriesgara a entrar en el teatro.</p>

<p><sup class="versenum">32&nbsp;</sup>Hab&iacute;a confusi&oacute;n en la asamblea. Cada uno gritaba una cosa distinta, y la mayor&iacute;a ni siquiera sab&iacute;a para qu&eacute; se hab&iacute;an reunido.<sup class="versenum">33&nbsp;</sup>Los jud&iacute;os empujaron a un tal Alejandro hacia adelante, y algunos de entre la multitud lo sacaron para que tomara la palabra. &Eacute;l agit&oacute; la mano para pedir silencio y presentar su defensa ante el pueblo.<sup class="versenum">34&nbsp;</sup>Pero, cuando se dieron cuenta de que era jud&iacute;o, todos se pusieron a gritar al un&iacute;sono como por dos horas:</p>

<p>&mdash;&iexcl;Grande es Artemisa de los efesios!</p>

<p><sup class="versenum">35&nbsp;</sup>El secretario del concejo municipal logr&oacute; calmar a la multitud y dijo:</p>

<p>&mdash;Ciudadanos de &Eacute;feso, &iquest;acaso no sabe todo el mundo que la ciudad de &Eacute;feso es guardiana del templo de la gran Artemisa y de su estatua bajada del cielo?<sup class="versenum">36&nbsp;</sup>Ya que estos hechos son innegables, es preciso que ustedes se calmen y no hagan nada precipitadamente.<sup class="versenum">37&nbsp;</sup>Ustedes han tra&iacute;do a estos hombres, aunque ellos no han cometido ning&uacute;n sacrilegio ni han blasfemado contra nuestra diosa.<sup class="versenum">38&nbsp;</sup>As&iacute; que, si Demetrio y sus compa&ntilde;eros de oficio tienen alguna queja contra alguien, para eso hay tribunales y gobernadores. Vayan y presenten all&iacute; sus acusaciones unos contra otros.<sup class="versenum">39&nbsp;</sup>Si tienen alguna otra demanda, que se resuelva en leg&iacute;tima asamblea.<sup class="versenum">40&nbsp;</sup>Tal y como est&aacute;n las cosas, con los sucesos de hoy corremos el riesgo de que nos acusen de causar disturbios. &iquest;Qu&eacute; raz&oacute;n podr&iacute;amos dar de este alboroto, si no hay ninguna?</p>

<p><sup class="versenum">41&nbsp;</sup>Dicho esto, despidi&oacute; la asamblea.</p>
<!-- end bible -->

<p class="bible"></p>

</div>


<button id="MC2/spa/video/multiply3/340.mp4" type="button" class="external-movie">
         Mira &nbsp;Hechos 19:23-41&nbsp;</button>
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
<p class="up">Cientos de miles de fieles y turistas ven&iacute;an a &Eacute;feso cada a&ntilde;o para adorar en el magn&iacute;fico Templo de Artemisa, considerado una de las siete maravillas del mundo antiguo. Tantas personas se estaban convirtiendo en seguidores de Jes&uacute;s que aquellos que se ganaron la vida vendiendo &iacute;dolos a los adoradores estaban perdiendo dinero. Un platero llamado Demetrio agit&oacute; a los artesanos, causando un mot&iacute;n contra Pablo y su mensaje. Los l&iacute;deres civiles pablo hab&iacute;a hecho amistad durante su larga estancia en &Eacute;feso, ayud&oacute; a protegerlo de la multitud enojada. El Se&ntilde;or us&oacute; al alcalde para calmar a la multitud y advertirles que estaban en peligro de causar problemas a la ciudad con el Emperador en Roma. De esta historia aprendemos un importante principio de liderazgo: Pablo desarroll&oacute; l&iacute;deres al involucrarlos en el ministerio. Cayo y Aristarco vinieron de la cosecha en Macedonia y estaban ayudando con el movimiento creciente.</p>

<p class="up">La segunda carta a la iglesia en Corinto se puede leer aqu&iacute;. (2 Corintios)</p>

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

			<td class="social" @click="share('lesson', 'El Reino Impacta la Economía en Éfeso: ', '/content/M2/spa/multiply3/multiply340.html')">
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