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
                        <div class="chapter_number ltr"><h1>7.</h1></div>
                        <div class="chapter_title ltr"><h1>Audacia frente a la persecución</h1></div>
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
	<li class="back">Lea o vea <strong>Hechos 4:1-31</strong> dos veces mientras todos escuchan</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Lee Hechos 4:1-31</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<div>
<div>
<h3>Pedro y Juan ante el Consejo</h3>

<p><sup class="versenum">1 </sup>Mientras Pedro y Juan le hablaban a la gente, se les presentaron los sacerdotes, el capit&aacute;n de la guardia del templo y los saduceos.<sup class="versenum">2&nbsp;</sup>Estaban muy disgustados porque los ap&oacute;stoles ense&ntilde;aban a la gente y proclamaban la resurrecci&oacute;n, que se hab&iacute;a hecho evidente en el caso de Jes&uacute;s.<sup class="versenum">3&nbsp;</sup>Prendieron a Pedro y a Juan y, como ya anochec&iacute;a, los metieron en la c&aacute;rcel hasta el d&iacute;a siguiente.<sup class="versenum">4&nbsp;</sup>Pero muchos de los que oyeron el mensaje creyeron, y el n&uacute;mero de estos, contando solo a los hombres, llegaba a unos cinco mil.</p>

<p><sup class="versenum">5&nbsp;</sup>Al d&iacute;a siguiente se reunieron en Jerusal&eacute;n los gobernantes, los ancianos y los maestros de la ley.<sup class="versenum">6&nbsp;</sup>All&iacute; estaban el sumo sacerdote An&aacute;s, Caif&aacute;s, Juan, Alejandro y los otros miembros de la familia del sumo sacerdote.<sup class="versenum">7&nbsp;</sup>Hicieron que Pedro y Juan comparecieran ante ellos y comenzaron a interrogarlos:</p>

<p>&mdash;&iquest;Con qu&eacute; poder, o en nombre de qui&eacute;n, hicieron ustedes esto?</p>

<p><sup class="versenum">8&nbsp;</sup>Pedro, lleno del Esp&iacute;ritu Santo, les respondi&oacute;:</p>

<p>&mdash;Gobernantes del pueblo y ancianos:<sup class="versenum">9&nbsp;</sup>Hoy se nos procesa por haber favorecido a un inv&aacute;lido, &iexcl;y se nos pregunta c&oacute;mo fue sanado!<sup class="versenum">10&nbsp;</sup>Sepan, pues, todos ustedes y todo el pueblo de Israel que este hombre est&aacute; aqu&iacute; delante de ustedes, sano gracias al nombre de Jesucristo de Nazaret, crucificado por ustedes, pero resucitado por Dios.<sup class="versenum">11&nbsp;</sup>Jesucristo es</p>

<p>&raquo;&ldquo;la piedra que desecharon ustedes los constructores,<br />
&nbsp;&nbsp;&nbsp;&nbsp;y que ha llegado a ser la piedra angular&rdquo;.</p>
</div>

<p><sup class="versenum">12&nbsp;</sup>De hecho, en ning&uacute;n otro hay salvaci&oacute;n, porque no hay bajo el cielo otro nombre dado a los hombres mediante el cual podamos ser salvos&raquo;.</p>

<p><sup class="versenum">13&nbsp;</sup>Los gobernantes, al ver la osad&iacute;a con que hablaban Pedro y Juan, y al darse cuenta de que eran gente sin estudios ni preparaci&oacute;n, quedaron asombrados y reconocieron que hab&iacute;an estado con Jes&uacute;s.<sup class="versenum">14&nbsp;</sup>Adem&aacute;s, como vieron que los acompa&ntilde;aba el hombre que hab&iacute;a sido sanado, no ten&iacute;an nada que alegar.<sup class="versenum">15&nbsp;</sup>As&iacute; que les mandaron que se retiraran del Consejo, y se pusieron a deliberar entre s&iacute;:<sup class="versenum">16&nbsp;</sup>&laquo;&iquest;Qu&eacute; vamos a hacer con estos sujetos? Es un hecho que por medio de ellos ha ocurrido un milagro evidente; todos los que viven en Jerusal&eacute;n lo saben, y no podemos negarlo.<sup class="versenum">17&nbsp;</sup>Pero, para evitar que este asunto siga divulg&aacute;ndose entre la gente, vamos a amenazarlos para que no vuelvan a hablar de ese nombre a nadie&raquo;.</p>

<p><sup class="versenum">18&nbsp;</sup>Los llamaron y les ordenaron terminantemente que dejaran de hablar y ense&ntilde;ar acerca del nombre de Jes&uacute;s.<sup class="versenum">19&nbsp;</sup>Pero Pedro y Juan replicaron:</p>

<p>&mdash;&iquest;Es justo delante de Dios obedecerlos a ustedes en vez de obedecerlo a &eacute;l? &iexcl;J&uacute;zguenlo ustedes mismos!<sup class="versenum">20&nbsp;</sup>Nosotros no podemos dejar de hablar de lo que hemos visto y o&iacute;do.</p>

<p><sup class="versenum">21&nbsp;</sup>Despu&eacute;s de nuevas amenazas, los dejaron irse. Por causa de la gente, no hallaban manera de castigarlos: todos alababan a Dios por lo que hab&iacute;a sucedido,<sup class="versenum">22&nbsp;</sup>pues el hombre que hab&iacute;a sido milagrosamente sanado ten&iacute;a m&aacute;s de cuarenta a&ntilde;os.</p>

<h3>La oraci&oacute;n de los creyentes</h3>

<p><sup class="versenum">23&nbsp;</sup>Al quedar libres, Pedro y Juan volvieron a los suyos y les relataron todo lo que les hab&iacute;an dicho los jefes de los sacerdotes y los ancianos.<sup class="versenum">24&nbsp;</sup>Cuando lo oyeron, alzaron un&aacute;nimes la voz en oraci&oacute;n a Dios: &laquo;Soberano Se&ntilde;or, creador del cielo y de la tierra, del mar y de todo lo que hay en ellos,<sup class="versenum">25&nbsp;</sup>t&uacute;, por medio del Esp&iacute;ritu Santo, dijiste en labios de nuestro padre David, tu siervo:</p>

<p>&raquo;&ldquo;&iquest;Por qu&eacute; se sublevan las naciones<br />
&nbsp;&nbsp;&nbsp;&nbsp;y en vano conspiran los pueblos?<br />
<sup class="versenum">26&nbsp;</sup>Los reyes de la tierra se rebelan<br />
&nbsp;&nbsp;&nbsp;&nbsp;y los gobernantes se confabulan<br />
contra el Se&ntilde;or<br />
&nbsp;&nbsp;&nbsp;&nbsp;y contra su ungido&rdquo;.</p>
</div>

<p><sup class="versenum">27&nbsp;</sup>En efecto, en esta ciudad se reunieron Herodes y Poncio Pilato, con los gentiles y con el pueblo de Israel, contra tu santo siervo Jes&uacute;s, a quien ungiste<sup class="versenum">28&nbsp;</sup>para hacer lo que de antemano tu poder y tu voluntad hab&iacute;an determinado que sucediera.<sup class="versenum">29&nbsp;</sup>Ahora, Se&ntilde;or, toma en cuenta sus amenazas y concede a tus siervos el proclamar tu palabra sin temor alguno.<sup class="versenum">30&nbsp;</sup>Por eso, extiende tu mano para sanar y hacer se&ntilde;ales y prodigios mediante el nombre de tu santo siervo Jes&uacute;s&raquo;.</p>

<p><sup class="versenum">31&nbsp;</sup>Despu&eacute;s de haber orado, tembl&oacute; el lugar en que estaban reunidos; todos fueron llenos del Esp&iacute;ritu Santo, y proclamaban la palabra de Dios sin temor alguno.</p>
<!-- end bible -->

<p class="bible"></p>

</div>


<button id="MC2/spa/video/multiply3/307.mp4" type="button" class="external-movie">
         Mira Hechos 4:1-31</button>
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
	<li>Los l&iacute;deres religiosos estaban molestos porque Pedro estaba ense&ntilde;ando a la gente acerca de la resurrecci&oacute;n de los muertos a trav&eacute;s de Jes&uacute;s, por lo que arrestaron a Pedro y Juan. Cuando las multitudes presenciaron la curaci&oacute;n del hombre cojo y escucharon el testimonio de Pedro, otros 2.000 hombres, m&aacute;s mujeres y ni&ntilde;os, se convirtieron en creyentes. Jes&uacute;s hab&iacute;a ense&ntilde;ado a los ap&oacute;stoles a no preocuparse por lo que deb&iacute;an decir cuando eran arrastrados delante de las autoridades. &Eacute;l prometi&oacute; que el Esp&iacute;ritu los guiar&iacute;a en qu&eacute; decir (<span class="popup-link" @click = "popUp('pop3')"> Mateo 10:17-20</span>).&nbsp;

	<div class="popup invisible" id="pop3"><!-- begin bible -->
	<p><sup class="versenum">17&nbsp;</sup>&raquo;Tengan cuidado con la gente; los entregar&aacute;n a los tribunales y los azotar&aacute;n en las sinagogas.<sup class="versenum">18&nbsp;</sup>Por mi causa los llevar&aacute;n ante gobernadores y reyes para dar testimonio a ellos y a los gentiles.<sup class="versenum">19&nbsp;</sup>Pero, cuando los arresten, no se preocupen por lo que van a decir o c&oacute;mo van a decirlo. En ese momento se les dar&aacute; lo que han de decir,<sup class="versenum">20&nbsp;</sup>porque no ser&aacute;n ustedes los que hablen, sino que el Esp&iacute;ritu de su Padre hablar&aacute; por medio de ustedes.</p>
	<!-- end bible --></div>
	A pesar de que Pedro y Juan no ten&iacute;an una educaci&oacute;n formal, ten&iacute;an un ministerio muy eficaz, habiendo aprendido de Jes&uacute;s y siendo empoderados por Su Esp&iacute;ritu. En este temoso conflicto con las autoridades, la valiente respuesta de los creyentes fue orar por audacia frente a la persecuci&oacute;n para que pudieran seguir obedeciendo a Jes&uacute;s en la misi&oacute;n.</li>
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

			<td class="social" @click="share('lesson', 'Audacia frente a la persecución: ', '/content/M2/spa/multiply3/multiply307.html')">
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