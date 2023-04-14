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
                        <div class="chapter_number ltr"><h1>23.</h1></div>
                        <div class="chapter_title ltr"><h1>El Rey Herodes persigue a los líderes y Dios responde</h1></div>
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
	<li class="back">Lea o vea <strong>Hechos 12:1-25</strong> dos veces mientras todos escuchan</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Lee Hechos 12</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>Pedro escapa milagrosamente de la c&aacute;rcel</h3>

<p><sup class="versenum">1 </sup>En ese tiempo el rey Herodes hizo arrestar a algunos de la iglesia con el fin de maltratarlos.<sup class="versenum">2&nbsp;</sup>A Jacobo, hermano de Juan, lo mand&oacute; matar a espada.<sup class="versenum">3&nbsp;</sup>Al ver que esto agradaba a los jud&iacute;os, procedi&oacute; a prender tambi&eacute;n a Pedro. Esto sucedi&oacute; durante la fiesta de los Panes sin levadura.<sup class="versenum">4&nbsp;</sup>Despu&eacute;s de arrestarlo, lo meti&oacute; en la c&aacute;rcel y lo puso bajo la vigilancia de cuatro grupos de cuatro soldados cada uno. Ten&iacute;a la intenci&oacute;n de hacerlo comparecer en juicio p&uacute;blico despu&eacute;s de la Pascua.<sup class="versenum">5&nbsp;</sup>Pero, mientras manten&iacute;an a Pedro en la c&aacute;rcel, la iglesia oraba constante y fervientemente a Dios por &eacute;l.</p>

<p><sup class="versenum">6&nbsp;</sup>La misma noche en que Herodes estaba a punto de sacar a Pedro para someterlo a juicio, este dorm&iacute;a entre dos soldados, sujeto con dos cadenas. Unos guardias vigilaban la entrada de la c&aacute;rcel.<sup class="versenum">7&nbsp;</sup>De repente apareci&oacute; un &aacute;ngel del Se&ntilde;or y una luz resplandeci&oacute; en la celda. Despert&oacute; a Pedro con unas palmadas en el costado y le dijo: &laquo;&iexcl;Date prisa, lev&aacute;ntate!&raquo; Las cadenas cayeron de las manos de Pedro.<sup class="versenum">8&nbsp;</sup>Le dijo adem&aacute;s el &aacute;ngel: &laquo;V&iacute;stete y c&aacute;lzate las sandalias&raquo;. As&iacute; lo hizo, y el &aacute;ngel a&ntilde;adi&oacute;: &laquo;&Eacute;chate la capa encima y s&iacute;gueme&raquo;.</p>

<p><sup class="versenum">9&nbsp;</sup>Pedro sali&oacute; tras &eacute;l, pero no sab&iacute;a si realmente estaba sucediendo lo que el &aacute;ngel hac&iacute;a. Le parec&iacute;a que se trataba de una visi&oacute;n.<sup class="versenum">10&nbsp;</sup>Pasaron por la primera y la segunda guardia, y llegaron al port&oacute;n de hierro que daba a la ciudad. El port&oacute;n se les abri&oacute; por s&iacute; solo, y salieron. Caminaron unas cuadras, y de repente el &aacute;ngel lo dej&oacute; solo.</p>

<p><sup class="versenum">11&nbsp;</sup>Entonces Pedro volvi&oacute; en s&iacute; y se dijo: &laquo;Ahora estoy completamente seguro de que el Se&ntilde;or ha enviado a su &aacute;ngel para librarme del poder de Herodes y de todo lo que el pueblo jud&iacute;o esperaba&raquo;.</p>

<p><sup class="versenum">12&nbsp;</sup>Cuando cay&oacute; en cuenta de esto, fue a casa de Mar&iacute;a, la madre de Juan, apodado Marcos, donde muchas personas estaban reunidas orando.<sup class="versenum">13&nbsp;</sup>Llam&oacute; a la puerta de la calle, y sali&oacute; a responder una criada llamada Rode.<sup class="versenum">14&nbsp;</sup>Al reconocer la voz de Pedro, se puso tan contenta que volvi&oacute; corriendo sin abrir.</p>

<p>&mdash;&iexcl;Pedro est&aacute; a la puerta! &mdash;exclam&oacute;.</p>

<p><sup class="versenum">15&nbsp;</sup>&mdash;&iexcl;Est&aacute;s loca! &mdash;le dijeron.</p>

<p>Ella insist&iacute;a en que as&iacute; era, pero los otros dec&iacute;an:</p>

<p>&mdash;Debe de ser su &aacute;ngel.</p>

<p><sup class="versenum">16&nbsp;</sup>Entre tanto, Pedro segu&iacute;a llamando. Cuando abrieron la puerta y lo vieron, quedaron pasmados.<sup class="versenum">17&nbsp;</sup>Con la mano Pedro les hizo se&ntilde;as de que se callaran, y les cont&oacute; c&oacute;mo el Se&ntilde;or lo hab&iacute;a sacado de la c&aacute;rcel.</p>

<p>&mdash;Cu&eacute;ntenles esto a Jacobo y a los hermanos &mdash;les dijo.</p>

<p>Luego sali&oacute; y se fue a otro lugar.</p>

<p><sup class="versenum">18&nbsp;</sup>Al amanecer se produjo un gran alboroto entre los soldados respecto al paradero de Pedro.<sup class="versenum">19&nbsp;</sup>Herodes hizo averiguaciones, pero, al no encontrarlo, les tom&oacute; declaraci&oacute;n a los guardias y mand&oacute; matarlos. Despu&eacute;s viaj&oacute; de Judea a Cesarea y se qued&oacute; all&iacute;.</p>

<h3>Muerte de Herodes</h3>

<p><sup class="versenum">20&nbsp;</sup>Herodes estaba furioso con los de Tiro y de Sid&oacute;n, pero ellos se pusieron de acuerdo y se presentaron ante &eacute;l. Habi&eacute;ndose ganado el favor de Blasto, camarero del rey, pidieron paz, porque su regi&oacute;n depend&iacute;a del pa&iacute;s del rey para obtener sus provisiones.</p>

<p><sup class="versenum">21&nbsp;</sup>El d&iacute;a se&ntilde;alado, Herodes, ataviado con su ropaje real y sentado en su trono, le dirigi&oacute; un discurso al pueblo.<sup class="versenum">22&nbsp;</sup>La gente gritaba: &laquo;&iexcl;Voz de un dios, no de hombre!&raquo;<sup class="versenum">23&nbsp;</sup>Al instante un &aacute;ngel del Se&ntilde;or lo hiri&oacute;, porque no le hab&iacute;a dado la gloria a Dios; y Herodes muri&oacute; comido de gusanos.</p>

<p><sup class="versenum">24&nbsp;</sup>Pero la palabra de Dios segu&iacute;a extendi&eacute;ndose y difundi&eacute;ndose.</p>

<p><sup class="versenum">25&nbsp;</sup>Cuando Bernab&eacute; y Saulo cumplieron su servicio, regresaron de Jerusal&eacute;n llevando con ellos a Juan, llamado tambi&eacute;n Marcos.</p>
<!-- end bible -->

<p class="bible"></p>

</div>


<button id="MC2/spa/video/multiply3/323.mp4" type="button" class="external-movie">
         Mira Hechos 12</button>
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
	<li class="mpbreal">Jes&uacute;s prometi&oacute; a los Ap&oacute;stoles: &quot;Si me persiguen, tambi&eacute;n los perseguir&aacute;n a ustedes&quot;. (<span class="popup-link" @click = "popUp('pop3')"> Juan 15:20</span>).

	<div class="popup invisible" id="pop3"><!-- begin bible -->
	<p><sup class="versenum">20&nbsp;</sup>Recuerden lo que les dije: &ldquo;Ning&uacute;n siervo es m&aacute;s que su amo&rdquo;. Si a m&iacute; me han perseguido, tambi&eacute;n a ustedes los perseguir&aacute;n. Si han obedecido mis ense&ntilde;anzas, tambi&eacute;n obedecer&aacute;n las de ustedes.</p>
	<!-- end bible --></div>
	Esta vez estalla la persecuci&oacute;n contra los Ap&oacute;stoles y otros l&iacute;deres de la iglesia. El Se&ntilde;or permite que el ap&oacute;stol Santiago sea asesinado, pero &eacute;l permite que Pedro escape milagrosamente de Herodes. Aunque los creyentes estaban orando para que el Se&ntilde;or salvara a Pedro, algunos de ellos dudaban de que pudiera suceder ( <span class="popup-link" @click = "popUp('pop4')"> Juan 12:13</span>).&nbsp;

	<div class="popup invisible" id="pop4"><!-- begin bible -->
	<div>
	<div>
	<div>
	<p><sup class="versenum">13&nbsp;</sup>tomaron ramas de palma y salieron a recibirlo, gritando a voz en cuello:</p>

	<p>&mdash;&iexcl;Hosanna!</p>
	</div>

	<p>&mdash;&iexcl;Bendito el que viene en el nombre del Se&ntilde;or!</p>
	</div>

	<p>&mdash;&iexcl;Bendito el Rey de Israel!</p>
	</div>
	<!-- end bible --></div>
	No hay un resultado com&uacute;n para la persecuci&oacute;n: a veces los creyentes escapan, a veces son asesinados; a veces Dios hace un milagro, a veces no. El Se&ntilde;or ense&ntilde;&oacute; &quot;ama a tus enemigos y ora por los que os persiguen&rdquo; y &ldquo;la venganza es m&iacute;a y yo pagar&eacute;&rdquo; (<span class="popup-link" @click = "popUp('pop5')"> Mateo 5:43- 48</span>;&nbsp;

	<div class="popup invisible" id="pop5"><!-- begin bible -->
	<p><sup class="versenum">43&nbsp;</sup>&raquo;Ustedes han o&iacute;do que se dijo: &ldquo;Ama a tu pr&oacute;jimo y odia a tu enemigo&rdquo;.<sup class="versenum">44&nbsp;</sup>Pero yo les digo: Amen a sus enemigos y oren por quienes los persiguen,<sup class="versenum">45&nbsp;</sup>para que sean hijos de su Padre que est&aacute; en el cielo. &Eacute;l hace que salga el sol sobre malos y buenos, y que llueva sobre justos e injustos.<sup class="versenum">46&nbsp;</sup>Si ustedes aman solamente a quienes los aman, &iquest;qu&eacute; recompensa recibir&aacute;n? &iquest;Acaso no hacen eso hasta los recaudadores de impuestos?<sup class="versenum">47&nbsp;</sup>Y, si saludan a sus hermanos solamente, &iquest;qu&eacute; de m&aacute;s hacen ustedes? &iquest;Acaso no hacen esto hasta los gentiles?<sup class="versenum">48&nbsp;</sup>Por tanto, sean perfectos, as&iacute; como su Padre celestial es perfecto.</p>
	<!-- end bible --></div>
	&nbsp;<span class="popup-link" @click = "popUp('pop6')"> Romanos 12:17-21</span>).

	<div class="popup invisible" id="pop6"><!-- begin bible -->
	<div>
	<p><sup class="versenum">17&nbsp;</sup>No paguen a nadie mal por mal. Procuren hacer lo bueno delante de todos.<sup class="versenum">18&nbsp;</sup>Si es posible, y en cuanto dependa de ustedes, vivan en paz con todos.<sup class="versenum">19&nbsp;</sup>No tomen venganza, hermanos m&iacute;os, sino dejen el castigo en las manos de Dios, porque est&aacute; escrito: &laquo;M&iacute;a es la venganza; yo pagar&eacute;&raquo;, dice el Se&ntilde;or.<sup class="versenum">20&nbsp;</sup>Antes bien,</p>

	<p>&laquo;Si tu enemigo tiene hambre, dale de comer;<br />
	&nbsp;&nbsp;&nbsp;&nbsp;si tiene sed, dale de beber.<br />
	Actuando as&iacute;, har&aacute;s que se averg&uuml;ence de su conducta&raquo;.</p>
	</div>

	<p><sup class="versenum">21&nbsp;</sup>No te dejes vencer por el mal; al contrario, vence el mal con el bien.</p>
	<!-- end bible --></div>
	En este momento Dios responde a la arrogancia y el ataque de Herodes quit&aacute;ndolo, mientras difunde a&uacute;n m&aacute;s Su propia Palabra. Esta historia incluye la tercera declaraci&oacute;n sumaria que se encuentra en el libro de Hechos: la palabra de Dios aument&oacute; y se multiplic&oacute; (<span class="popup-link" @click = "popUp('pop7')"> Hechos 12:24</span>).

	<div class="popup invisible" id="pop7"><!-- begin bible -->
	<p><sup class="versenum">24&nbsp;</sup>Pero la palabra de Dios segu&iacute;a extendi&eacute;ndose y difundi&eacute;ndose.</p>
	<!-- end bible --></div>
	</li>
</ul>

</div>

<p><em>Practique el dar y la Santa Cena aqu&iacute; o en la secci&oacute;n Preparaci&oacute;n para la Misi&oacute;n</em></p>

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

			<td class="social" @click="share('lesson', 'El Rey Herodes persigue a los líderes y Dios responde: ', '/content/M2/spa/multiply3/multiply323.html')">
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