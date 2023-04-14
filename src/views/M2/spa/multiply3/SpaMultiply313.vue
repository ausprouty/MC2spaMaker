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
                        <div class="chapter_number ltr"><h1>13.</h1></div>
                        <div class="chapter_title ltr"><h1>Esteban asesinado y creyentes dispersos</h1></div>
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
	<li class="nobreak-final-final">(Opcional) Jesucristo es el Se&ntilde;or, para la gloria de Dios Padre. &Eacute;l quiere que todos los hombres sean salvos y lleguen al conocimiento de la verdad. Porque hay un solo Dios y un mediador tambi&eacute;n entre Dios y el hombre, el hombre Jesucristo, que se entreg&oacute; a s&iacute; mismo como rescate por todos. (<span class="popup-link" @click = "popUp('pop1')"> Filipenses 2:11b</span>;

	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<div>
	<p><sup class="versenum">11&nbsp; </sup>&nbsp;...&nbsp; &nbsp;para gloria de Dios Padre.</p>
	</div>
	<!-- end bible --></div>
	&nbsp;<span class="popup-link" @click = "popUp('pop2')"> 1 Timoteo 2:4-6a)</span>

	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<p><sup class="versenum">4&nbsp;</sup>pues &eacute;l quiere que todos sean salvos y lleguen a conocer la verdad.<sup class="versenum">5&nbsp;</sup>Porque hay un solo Dios y un solo mediador entre Dios y los hombres, Jesucristo hombre,<sup class="versenum">6&nbsp;</sup>quien dio su vida como rescate por todos. Este testimonio Dios lo ha dado a su debido tiempo,</p>
	</div>
	</li>
</ul>

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
	<li class="back">Lea o vea <strong>Hechos 7:54-8:3</strong> dos veces mientras todos escuchan</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Lee Hechos 7:54-8:3</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<div>
<div>
<div>
<div>
<div>
<div>
<h3>Muerte de Esteban</h3>

<p><sup class="versenum">54&nbsp;</sup>Al o&iacute;r esto, rechinando los dientes montaron en c&oacute;lera contra &eacute;l.<sup class="versenum">55&nbsp;</sup>Pero Esteban, lleno del Esp&iacute;ritu Santo, fij&oacute; la mirada en el cielo y vio la gloria de Dios, y a Jes&uacute;s de pie a la derecha de Dios.</p>

<p><sup class="versenum">56&nbsp;</sup>&mdash;&iexcl;Veo el cielo abierto &mdash;exclam&oacute;&mdash;, y al Hijo del hombre de pie a la derecha de Dios!</p>

<p><sup class="versenum">57&nbsp;</sup>Entonces ellos, gritando a voz en cuello, se taparon los o&iacute;dos y todos a una se abalanzaron sobre &eacute;l,<sup class="versenum">58&nbsp;</sup>lo sacaron a empellones fuera de la ciudad y comenzaron a apedrearlo. Los acusadores le encargaron sus mantos a un joven llamado Saulo.</p>

<p><sup class="versenum">59&nbsp;</sup>Mientras lo apedreaban, Esteban oraba.</p>

<p>&mdash;Se&ntilde;or Jes&uacute;s &mdash;dec&iacute;a&mdash;, recibe mi esp&iacute;ritu.</p>

<p><sup class="versenum">60&nbsp;</sup>Luego cay&oacute; de rodillas y grit&oacute;:</p>

<p>&mdash;&iexcl;Se&ntilde;or, no les tomes en cuenta este pecado!</p>

<p>Cuando hubo dicho esto, muri&oacute;.</p>

<p><sup class="versenum">1 </sup>Y Saulo estaba all&iacute;, aprobando la muerte de Esteban.</p>

<h3>La iglesia perseguida y dispersa</h3>

<p>Aquel d&iacute;a se desat&oacute; una gran persecuci&oacute;n contra la iglesia en Jerusal&eacute;n, y todos, excepto los ap&oacute;stoles, se dispersaron por las regiones de Judea y Samaria.<sup class="versenum">2&nbsp;</sup>Unos hombres piadosos sepultaron a Esteban e hicieron gran duelo por &eacute;l.<sup class="versenum">3&nbsp;</sup>Saulo, por su parte, causaba estragos en la iglesia: entrando de casa en casa, arrastraba a hombres y mujeres y los met&iacute;a en la c&aacute;rcel.</p>
</div>
</div>
</div>
</div>
</div>
</div>
<!-- end bible -->

<p class="bible"></p>

</div>


<button id="MC2/spa/video/multiply3/313.mp4" type="button" class="external-movie">
         Mira Hechos 7:54-8:3</button>
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
<ul>
	<li class="nobreak-final-final">Esteban mostr&oacute; su habilidad en el manejo de la Palabra de Dios y enfrent&oacute; a los l&iacute;deres con palabras de verdad. Los acus&oacute; de desobedecer a Dios, pecar contra el Esp&iacute;ritu Santo, la Ley y Jes&uacute;s el Mes&iacute;as. Cuando Esteban les dijo que pod&iacute;a ver a Jes&uacute;s, &quot;el Hijo del Hombre&quot;, los l&iacute;deres estallaron en violencia contra &eacute;l. Jes&uacute;s hab&iacute;a ense&ntilde;ado a los disc&iacute;pulos que las personas que los mataron pensar&iacute;an que estaban sirviendo a Dios (<span class="popup-link" @click = "popUp('pop3')"> Mateo 10:16-39</span>).&nbsp;

	<div class="popup invisible" id="pop3"><!-- begin bible -->
	<div>
	<p><sup class="versenum">16&nbsp;</sup>Los env&iacute;o como ovejas en medio de lobos. Por tanto, sean astutos como serpientes y sencillos como palomas.</p>

	<p><sup class="versenum">17&nbsp;</sup>&raquo;Tengan cuidado con la gente; los entregar&aacute;n a los tribunales y los azotar&aacute;n en las sinagogas.<sup class="versenum">18&nbsp;</sup>Por mi causa los llevar&aacute;n ante gobernadores y reyes para dar testimonio a ellos y a los gentiles.<sup class="versenum">19&nbsp;</sup>Pero, cuando los arresten, no se preocupen por lo que van a decir o c&oacute;mo van a decirlo. En ese momento se les dar&aacute; lo que han de decir,<sup class="versenum">20&nbsp;</sup>porque no ser&aacute;n ustedes los que hablen, sino que el Esp&iacute;ritu de su Padre hablar&aacute; por medio de ustedes.</p>

	<p><sup class="versenum">21&nbsp;</sup>&raquo;El hermano entregar&aacute; a la muerte al hermano, y el padre al hijo. Los hijos se rebelar&aacute;n contra sus padres y har&aacute;n que los maten.<sup class="versenum">22&nbsp;</sup>Por causa de mi nombre todo el mundo los odiar&aacute;, pero el que se mantenga firme hasta el fin ser&aacute; salvo.<sup class="versenum">23&nbsp;</sup>Cuando los persigan en una ciudad, huyan a otra. Les aseguro que no terminar&aacute;n de recorrer las ciudades de Israel antes de que venga el Hijo del hombre.</p>

	<p><sup class="versenum">24&nbsp;</sup>&raquo;El disc&iacute;pulo no es superior a su maestro, ni el siervo superior a su amo.<sup class="versenum">25&nbsp;</sup>Basta con que el disc&iacute;pulo sea como su maestro, y el siervo como su amo. Si al jefe de la casa lo han llamado Beelzeb&uacute;, &iexcl;cu&aacute;nto m&aacute;s a los de su familia!</p>

	<p><sup class="versenum">26&nbsp;</sup>&raquo;As&iacute; que no les tengan miedo; porque no hay nada encubierto que no llegue a revelarse, ni nada escondido que no llegue a conocerse.<sup class="versenum">27&nbsp;</sup>Lo que les digo en la oscuridad, d&iacute;ganlo ustedes a plena luz; lo que se les susurra al o&iacute;do, procl&aacute;menlo desde las azoteas.<sup class="versenum">28&nbsp;</sup>No teman a los que matan el cuerpo, pero no pueden matar el alma. Teman m&aacute;s bien al que puede destruir alma y cuerpo en el infierno.<sup class="versenum">29&nbsp;</sup>&iquest;No se venden dos gorriones por una monedita? Sin embargo, ni uno de ellos caer&aacute; a tierra sin que lo permita el Padre;<sup class="versenum">30&nbsp;</sup>y &eacute;l les tiene contados a ustedes aun los cabellos de la cabeza.<sup class="versenum">31&nbsp;</sup>As&iacute; que no tengan miedo; ustedes valen m&aacute;s que muchos gorriones.</p>

	<p><sup class="versenum">32&nbsp;</sup>&raquo;A cualquiera que me reconozca delante de los dem&aacute;s, yo tambi&eacute;n lo reconocer&eacute; delante de mi Padre que est&aacute; en el cielo.<sup class="versenum">33&nbsp;</sup>Pero a cualquiera que me desconozca delante de los dem&aacute;s, yo tambi&eacute;n lo desconocer&eacute; delante de mi Padre que est&aacute; en el cielo.</p>

	<p><sup class="versenum">34&nbsp;</sup>&raquo;No crean que he venido a traer paz a la tierra. No vine a traer paz, sino espada.<sup class="versenum">35&nbsp;</sup>Porque he venido a poner en conflicto</p>

	<p>&raquo;&ldquo;al hombre contra su padre,<br />
	&nbsp;&nbsp;&nbsp;&nbsp;a la hija contra su madre,<br />
	&nbsp;&nbsp;&nbsp;&nbsp;a la nuera contra su suegra;<br />
	<sup class="versenum">36&nbsp;</sup>los enemigos de cada cual<br />
	&nbsp;&nbsp;&nbsp;&nbsp;ser&aacute;n los de su propia familia&rdquo;.</p>
	</div>

	<p><sup class="versenum">37&nbsp;</sup>&raquo;El que quiere a su padre o a su madre m&aacute;s que a m&iacute; no es digno de m&iacute;; el que quiere a su hijo o a su hija m&aacute;s que a m&iacute; no es digno de m&iacute;;<sup class="versenum">38&nbsp;</sup>y el que no toma su cruz y me sigue no es digno de m&iacute;.<sup class="versenum">39&nbsp;</sup>El que se aferre a su propia vida, la perder&aacute;, y el que renuncie a su propia vida por mi causa, la encontrar&aacute;.</p>
	<!-- end bible --></div>
	&nbsp;Jes&uacute;s fue visto de pie (no sentado) en el lugar de honor junto a Dios padre vigilando todos estos eventos, pero no rescat&oacute; a Esteban de la muerte. Esteban or&oacute; directamente a Jes&uacute;s mientras mor&iacute;a, y su petici&oacute;n reflejaba que entend&iacute;a la igualdad de Jes&uacute;s con Dios (<span class="popup-link" @click = "popUp('pop4')"> Hechos 7:59-60</span>).&nbsp;

	<div class="popup invisible" id="pop4"><!-- begin bible -->
	<p><sup class="versenum">59&nbsp;</sup>Mientras lo apedreaban, Esteban oraba.</p>

	<p>&mdash;Se&ntilde;or Jes&uacute;s &mdash;dec&iacute;a&mdash;, recibe mi esp&iacute;ritu.</p>

	<p><sup class="versenum">60&nbsp;</sup>Luego cay&oacute; de rodillas y grit&oacute;:</p>

	<p>&mdash;&iexcl;Se&ntilde;or, no les tomes en cuenta este pecado!</p>

	<p>Cuando hubo dicho esto, muri&oacute;.</p>
	<!-- end bible --></div>
	Esta historia tambi&eacute;n presenta a un joven l&iacute;der religioso llamado Saulo que aprob&oacute; todo lo que estaba sucediendo. Saulo comenz&oacute; a ir a todas partes para destruir la iglesia. Tanto hombres como mujeres fueron perseguidos por su fe y muchos de los creyentes abandonaron Jerusal&eacute;n para huir de la violencia.</li>
</ul>

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

			<td class="social" @click="share('lesson', 'Esteban asesinado y creyentes dispersos: ', '/content/M2/spa/multiply3/multiply313.html')">
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