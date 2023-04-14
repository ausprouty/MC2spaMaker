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
                        <div class="chapter_number ltr"><h1>40.</h1></div>
                        <div class="chapter_title ltr"><h1>Multiplicación basada en la cercanía</h1></div>
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
	<li class="back">Lea o vea <strong>Lucas 9:28-36</strong> dos veces mientras todos escuchan</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Lee Lucas 9:28-36</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>La transfiguraci&oacute;n</h3>

<p><sup class="versenum">28&nbsp;</sup>Unos ocho d&iacute;as despu&eacute;s de decir esto, Jes&uacute;s, acompa&ntilde;ado de Pedro, Juan y Jacobo, subi&oacute; a una monta&ntilde;a a orar.<sup class="versenum">29&nbsp;</sup>Mientras oraba, su rostro se transform&oacute;, y su ropa se torn&oacute; blanca y radiante.<sup class="versenum">30&nbsp;</sup>Y aparecieron dos personajes &mdash;Mois&eacute;s y El&iacute;as&mdash; que conversaban con Jes&uacute;s.<sup class="versenum">31&nbsp;</sup>Ten&iacute;an un aspecto glorioso, y hablaban de la partida de Jes&uacute;s, que &eacute;l estaba por llevar a cabo en Jerusal&eacute;n.<sup class="versenum">32&nbsp;</sup>Pedro y sus compa&ntilde;eros estaban rendidos de sue&ntilde;o, pero, cuando se despabilaron, vieron su gloria y a los dos personajes que estaban con &eacute;l.<sup class="versenum">33&nbsp;</sup>Mientras estos se apartaban de Jes&uacute;s, Pedro, sin saber lo que estaba diciendo, propuso:</p>

<p>&mdash;Maestro, &iexcl;qu&eacute; bien que estemos aqu&iacute;! Podemos levantar tres albergues: uno para ti, otro para Mois&eacute;s y otro para El&iacute;as.</p>

<p><sup class="versenum">34&nbsp;</sup>Estaba hablando todav&iacute;a cuando apareci&oacute; una nube que los envolvi&oacute;, de modo que se asustaron.<sup class="versenum">35&nbsp;</sup>Entonces sali&oacute; de la nube una voz que dijo: &laquo;Este es mi Hijo, mi escogido; esc&uacute;chenlo&raquo;.<sup class="versenum">36&nbsp;</sup>Despu&eacute;s de o&iacute;rse la voz, Jes&uacute;s qued&oacute; solo. Los disc&iacute;pulos guardaron esto en secreto, y por alg&uacute;n tiempo a nadie contaron nada de lo que hab&iacute;an visto.</p>
<!-- end bible -->

<p class="bible"></p>

</div>


<button id="MC2/spa/video/multiply2/240.mp4" type="button" class="external-movie">
         Mira &nbsp;Lucas 9:28-36&nbsp;</button>
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

<p class="up">Seis d&iacute;as despu&eacute;s de la confesi&oacute;n de Pedro acerca de qui&eacute;n es Jes&uacute;s, Jes&uacute;s comienza a ense&ntilde;ar acerca del sufrimiento como parte de la expansi&oacute;n del Reino. Jes&uacute;s selecciona a tres de los doce l&iacute;deres y los distingue. Pedro, Santiago y Juan se acercan a&uacute;n m&aacute;s para que Jes&uacute;s pueda revelar m&aacute;s de qui&eacute;n es &Eacute;l y darles instrucci&oacute;n especial como los l&iacute;deres de los l&iacute;deres. Deja a los nueve y lleva a los tres hasta la cima de una monta&ntilde;a y les permite ver toda Su gloria revelada. En la cima de la monta&ntilde;a escuchan la voz del Padre afirmando a Jes&uacute;s, Su Hijo. Aunque Mois&eacute;s y El&iacute;as fueron h&eacute;roes para el pueblo jud&iacute;o, el Padre pone a Jes&uacute;s m&aacute;s alto que todos los dem&aacute;s y les dice a los tres que &quot;lo escuchen&quot;.</p>

<ul>
	<li class="nobreak-final-final">Para m&aacute;s estudio: <span class="popup-link" @click = "popUp('pop3')"> Mateo 17:1-13</span>;

	<div class="popup invisible" id="pop3"><!-- begin bible -->
	<p><sup class="versenum">1 </sup>Seis d&iacute;as despu&eacute;s, Jes&uacute;s tom&oacute; consigo a Pedro, a Jacobo y a Juan, el hermano de Jacobo, y los llev&oacute; aparte, a una monta&ntilde;a alta.<sup class="versenum">2&nbsp;</sup>All&iacute; se transfigur&oacute; en presencia de ellos; su rostro resplandeci&oacute; como el sol, y su ropa se volvi&oacute; blanca como la luz.<sup class="versenum">3&nbsp;</sup>En esto, se les aparecieron Mois&eacute;s y El&iacute;as conversando con Jes&uacute;s.<sup class="versenum">4&nbsp;</sup>Pedro le dijo a Jes&uacute;s:</p>

	<p>&mdash;Se&ntilde;or, &iexcl;qu&eacute; bueno ser&iacute;a que nos quedemos aqu&iacute;! Si quieres, levantar&eacute; tres albergues: uno para ti, otro para Mois&eacute;s y otro para El&iacute;as.</p>

	<p><sup class="versenum">5&nbsp;</sup>Mientras estaba a&uacute;n hablando, apareci&oacute; una nube luminosa que los envolvi&oacute;, de la cual sali&oacute; una voz que dijo: &laquo;Este es mi Hijo amado; estoy muy complacido con &eacute;l. &iexcl;Esc&uacute;chenlo!&raquo;</p>

	<p><sup class="versenum">6&nbsp;</sup>Al o&iacute;r esto, los disc&iacute;pulos se postraron sobre su rostro, aterrorizados.<sup class="versenum">7&nbsp;</sup>Pero Jes&uacute;s se acerc&oacute; a ellos y los toc&oacute;.</p>

	<p>&mdash;Lev&aacute;ntense &mdash;les dijo&mdash;. No tengan miedo.</p>

	<p><sup class="versenum">8&nbsp;</sup>Cuando alzaron la vista, no vieron a nadie m&aacute;s que a Jes&uacute;s.</p>

	<p><sup class="versenum">9&nbsp;</sup>Mientras bajaban de la monta&ntilde;a, Jes&uacute;s les encarg&oacute;:</p>

	<p>&mdash;No le cuenten a nadie lo que han visto hasta que el Hijo del hombre resucite.</p>

	<p><sup class="versenum">10&nbsp;</sup>Entonces los disc&iacute;pulos le preguntaron a Jes&uacute;s:</p>

	<p>&mdash;&iquest;Por qu&eacute; dicen los maestros de la ley que El&iacute;as tiene que venir primero?</p>

	<p><sup class="versenum">11&nbsp;</sup>&mdash;Sin duda El&iacute;as viene, y restaurar&aacute; todas las cosas &mdash;respondi&oacute; Jes&uacute;s&mdash;.<sup class="versenum">12&nbsp;</sup>Pero les digo que El&iacute;as ya vino, y no lo reconocieron, sino que hicieron con &eacute;l todo lo que quisieron. De la misma manera va a sufrir el Hijo del hombre a manos de ellos.</p>

	<p><sup class="versenum">13&nbsp;</sup>Entonces entendieron los disc&iacute;pulos que les estaba hablando de Juan el Bautista.</p>
	<!-- end bible --></div>
	<span class="popup-link" @click = "popUp('pop4')"> Marcos 9:2-13</span>.

	<div class="popup invisible" id="pop4"><!-- begin bible -->
	<p><sup class="versenum">2&nbsp;</sup>Seis d&iacute;as despu&eacute;s Jes&uacute;s tom&oacute; consigo a Pedro, a Jacobo y a Juan, y los llev&oacute; a una monta&ntilde;a alta, donde estaban solos. All&iacute; se transfigur&oacute; en presencia de ellos.<sup class="versenum">3&nbsp;</sup>Su ropa se volvi&oacute; de un blanco resplandeciente como nadie en el mundo podr&iacute;a blanquearla.<sup class="versenum">4&nbsp;</sup>Y se les aparecieron El&iacute;as y Mois&eacute;s, los cuales conversaban con Jes&uacute;s.<sup class="versenum">5&nbsp;</sup>Tomando la palabra, Pedro le dijo a Jes&uacute;s:</p>

	<p>&mdash;Rab&iacute;, &iexcl;qu&eacute; bien que estemos aqu&iacute;! Podemos levantar tres albergues: uno para ti, otro para Mois&eacute;s y otro para El&iacute;as.</p>

	<p><sup class="versenum">6&nbsp;</sup>No sab&iacute;a qu&eacute; decir, porque todos estaban asustados.<sup class="versenum">7&nbsp;</sup>Entonces apareci&oacute; una nube que los envolvi&oacute;, de la cual sali&oacute; una voz que dijo: &laquo;Este es mi Hijo amado. &iexcl;Esc&uacute;chenlo!&raquo;</p>

	<p><sup class="versenum">8&nbsp;</sup>De repente, cuando miraron a su alrededor, ya no vieron a nadie m&aacute;s que a Jes&uacute;s.</p>

	<p><sup class="versenum">9&nbsp;</sup>Mientras bajaban de la monta&ntilde;a, Jes&uacute;s les orden&oacute; que no contaran a nadie lo que hab&iacute;an visto hasta que el Hijo del hombre se levantara de entre los muertos.<sup class="versenum">10&nbsp;</sup>Guardaron el secreto, pero discut&iacute;an entre ellos qu&eacute; significar&iacute;a eso de &laquo;levantarse de entre los muertos&raquo;.</p>

	<p><sup class="versenum">11&nbsp;</sup>&mdash;&iquest;Por qu&eacute; dicen los maestros de la ley que El&iacute;as tiene que venir primero? &mdash;le preguntaron.</p>

	<p><sup class="versenum">12&nbsp;</sup>&mdash;Sin duda El&iacute;as ha de venir primero para restaurar todas las cosas &mdash;respondi&oacute; Jes&uacute;s&mdash;. Pero, entonces, &iquest;c&oacute;mo es que est&aacute; escrito que el Hijo del hombre tiene que sufrir mucho y ser rechazado?<sup class="versenum">13&nbsp;</sup>Pues bien, les digo que El&iacute;as ya ha venido, y le hicieron todo lo que quisieron, tal como est&aacute; escrito de &eacute;l.</p>
	<!-- end bible --></div>

	<p>&nbsp;</p>

	<ul>
	</ul>

	<p>&nbsp;</p>
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

			<td class="social" @click="share('lesson', 'Multiplicación basada en la cercanía: ', '/content/M2/spa/multiply2/multiply240.html')">
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