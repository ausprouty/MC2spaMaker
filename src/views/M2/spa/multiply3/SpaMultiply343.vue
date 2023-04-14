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
                        <div class="chapter_number ltr"><h1>43.</h1></div>
                        <div class="chapter_title ltr"><h1>Visitas a discípulos en el camino a Jerusalén</h1></div>
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
	<li class="back">Lea o vea <strong>Hechos 21:1-26</strong> dos veces mientras todos escuchan</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Lee Hechos 21:1-26</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>Rumbo a Jerusal&eacute;n</h3>

<p><sup class="versenum">1 </sup>Despu&eacute;s de separarnos de ellos, zarpamos y navegamos directamente a Cos. Al d&iacute;a siguiente fuimos a Rodas, y de all&iacute; a P&aacute;tara.<sup class="versenum">2&nbsp;</sup>Como encontramos un barco que iba para Fenicia, subimos a bordo y zarpamos.<sup class="versenum">3&nbsp;</sup>Despu&eacute;s de avistar Chipre y de pasar al sur de la isla, navegamos hacia Siria y llegamos a Tiro, donde el barco ten&iacute;a que descargar.<sup class="versenum">4&nbsp;</sup>All&iacute; encontramos a los disc&iacute;pulos y nos quedamos con ellos siete d&iacute;as. Ellos, por medio del Esp&iacute;ritu, exhortaron a Pablo a que no subiera a Jerusal&eacute;n.<sup class="versenum">5&nbsp;</sup>Pero, al cabo de algunos d&iacute;as, partimos y continuamos nuestro viaje. Todos los disc&iacute;pulos, incluso las mujeres y los ni&ntilde;os, nos acompa&ntilde;aron hasta las afueras de la ciudad, y all&iacute; en la playa nos arrodillamos y oramos.<sup class="versenum">6&nbsp;</sup>Luego de despedirnos, subimos a bordo y ellos regresaron a sus hogares.</p>

<p><sup class="versenum">7&nbsp;</sup>Nosotros continuamos nuestro viaje en barco desde Tiro y arribamos a Tolemaida, donde saludamos a los hermanos y nos quedamos con ellos un d&iacute;a.<sup class="versenum">8&nbsp;</sup>Al d&iacute;a siguiente salimos y llegamos a Cesarea, y nos hospedamos en casa de Felipe el evangelista, que era uno de los siete;<sup class="versenum">9&nbsp;</sup>este ten&iacute;a cuatro hijas solteras que profetizaban.</p>

<p><sup class="versenum">10&nbsp;</sup>Llev&aacute;bamos all&iacute; varios d&iacute;as cuando baj&oacute; de Judea un profeta llamado &Aacute;gabo.<sup class="versenum">11&nbsp;</sup>Este vino a vernos y, tomando el cintur&oacute;n de Pablo, se at&oacute; con &eacute;l de pies y manos, y dijo:</p>

<p>&mdash;As&iacute; dice el Esp&iacute;ritu Santo: &ldquo;De esta manera atar&aacute;n los jud&iacute;os de Jerusal&eacute;n al due&ntilde;o de este cintur&oacute;n, y lo entregar&aacute;n en manos de los gentiles&rdquo;.</p>

<p><sup class="versenum">12&nbsp;</sup>Al o&iacute;r esto, nosotros y los de aquel lugar le rogamos a Pablo que no subiera a Jerusal&eacute;n.</p>

<p><sup class="versenum">13&nbsp;</sup>&mdash;&iquest;Por qu&eacute; lloran? &iexcl;Me parten el alma! &mdash;respondi&oacute; Pablo&mdash;. Por el nombre del Se&ntilde;or Jes&uacute;s estoy dispuesto no solo a ser atado, sino tambi&eacute;n a morir en Jerusal&eacute;n.</p>

<p><sup class="versenum">14&nbsp;</sup>Como no se dejaba convencer, desistimos, exclamando:</p>

<p>&mdash;&iexcl;Que se haga la voluntad del Se&ntilde;or!</p>

<p><sup class="versenum">15&nbsp;</sup>Despu&eacute;s de esto, acabamos los preparativos y subimos a Jerusal&eacute;n.<sup class="versenum">16&nbsp;</sup>Algunos de los disc&iacute;pulos de Cesarea nos acompa&ntilde;aron y nos llevaron a la casa de Mnas&oacute;n, donde &iacute;bamos a alojarnos. Este era de Chipre, y uno de los primeros disc&iacute;pulos.</p>

<h3>Llegada de Pablo a Jerusal&eacute;n</h3>

<p><sup class="versenum">17&nbsp;</sup>Cuando llegamos a Jerusal&eacute;n, los creyentes nos recibieron calurosamente.<sup class="versenum">18&nbsp;</sup>Al d&iacute;a siguiente Pablo fue con nosotros a ver a Jacobo, y todos los ancianos estaban presentes.<sup class="versenum">19&nbsp;</sup>Despu&eacute;s de saludarlos, Pablo les relat&oacute; detalladamente lo que Dios hab&iacute;a hecho entre los gentiles por medio de su ministerio.</p>

<p><sup class="versenum">20&nbsp;</sup>Al o&iacute;rlo, alabaron a Dios. Luego le dijeron a Pablo: &laquo;Ya ves, hermano, cu&aacute;ntos miles de jud&iacute;os han cre&iacute;do, y todos ellos siguen aferrados a la ley.<sup class="versenum">21&nbsp;</sup>Ahora bien, han o&iacute;do decir que t&uacute; ense&ntilde;as que se aparten de Mois&eacute;s todos los jud&iacute;os que viven entre los gentiles. Les recomiendas que no circunciden a sus hijos ni vivan seg&uacute;n nuestras costumbres.<sup class="versenum">22&nbsp;</sup>&iquest;Qu&eacute; vamos a hacer? Sin duda se van a enterar de que has llegado.<sup class="versenum">23&nbsp;</sup>Por eso, ser&aacute; mejor que sigas nuestro consejo. Hay aqu&iacute; entre nosotros cuatro hombres que tienen que cumplir un voto.<sup class="versenum">24&nbsp;</sup>Ll&eacute;vatelos, toma parte en sus ritos de purificaci&oacute;n y paga los gastos que corresponden al voto de rasurarse la cabeza. As&iacute; todos sabr&aacute;n que no son ciertos esos informes acerca de ti, sino que t&uacute; tambi&eacute;n vives en obediencia a la ley.<sup class="versenum">25&nbsp;</sup>En cuanto a los creyentes gentiles, ya les hemos comunicado por escrito nuestra decisi&oacute;n de que se abstengan de lo sacrificado a los &iacute;dolos, de sangre, de la carne de animales estrangulados y de la inmoralidad sexual&raquo;.</p>

<p><sup class="versenum">26&nbsp;</sup>Al d&iacute;a siguiente Pablo se llev&oacute; a los hombres y se purific&oacute; con ellos. Luego entr&oacute; en el templo para dar aviso de la fecha en que vencer&iacute;a el plazo de la purificaci&oacute;n y se har&iacute;a la ofrenda por cada uno de ellos.</p>
<!-- end bible -->

<p class="bible"></p>

</div>


<button id="MC2/spa/video/multiply3/343.mp4" type="button" class="external-movie">
         Mira Hechos 21:1-26</button>
    <div class="collapsed"></div>

<h2 class="up">&nbsp;</h2>




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
<p class="up">Pablo no fue el &uacute;nico que inici&oacute; iglesias. Aprendemos de esta historia acerca de otras comunidades de creyentes que se hab&iacute;an formado aparte de la obra de Pablo. En Cesarea, se quedaron con Felipe, quien testimonio a los samaritanos y al eunuco et&iacute;ope (Hechos 8:40). A trav&eacute;s de las hijas de Felipe, aprendemos que las mujeres tambi&eacute;n recibieron dones del Esp&iacute;ritu Santo como profec&iacute;a. En dos ocasiones, se dieron profec&iacute;as a trav&eacute;s del Esp&iacute;ritu Santo sobre el peligro que Pablo enfrentar&iacute;a en Jerusal&eacute;n, pero esto no era nuevo para Pablo. Pablo estaba siendo obligado por el Esp&iacute;ritu a ir a Jerusal&eacute;n (Hechos 19:21), y se le hab&iacute;a dicho que la persecuci&oacute;n le esperaba (Hechos 20:22-23). Pablo hab&iacute;a aceptado que la voluntad del Se&ntilde;or para &eacute;l inclu&iacute;a el sufrimiento. Los problemas de ocho a&ntilde;os antes acerca de la pr&aacute;ctica de la Ley todav&iacute;a molestaban a los creyentes jud&iacute;os en Jerusal&eacute;n (Hechos 11 y 15). Pablo se someti&oacute; a las peticiones de los l&iacute;deres de Jerusal&eacute;n de cumplir la ley para que los creyentes locales no tropezaran. Lee Romanos 14:13-19.</p>

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

			<td class="social" @click="share('lesson', 'Visitas a discípulos en el camino a Jerusalén: ', '/content/M2/spa/multiply3/multiply343.html')">
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