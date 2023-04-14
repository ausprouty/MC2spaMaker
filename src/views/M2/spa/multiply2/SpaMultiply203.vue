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
                        <div class="chapter_number ltr"><h1>3.</h1></div>
                        <div class="chapter_title ltr"><h1>Jesús como un niño</h1></div>
                    </div>
<div id="showVideoOptions"></div>
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
	<li class="back">Lea o vea <strong>Mateo 2:1-18</strong> dos veces mientras todos escuchan</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Lee Mateo 2:1-18</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<div>
<h3>Visita de los sabios</h3>

<p><sup class="versenum">1 </sup>Despu&eacute;s de que Jes&uacute;s naci&oacute; en Bel&eacute;n de Judea en tiempos del rey Herodes, llegaron a Jerusal&eacute;n unos sabios procedentes del Oriente.</p>

<p><sup class="versenum">2&nbsp;</sup>&mdash;&iquest;D&oacute;nde est&aacute; el que ha nacido rey de los jud&iacute;os? &mdash;preguntaron&mdash;. Vimos levantarse su estrella y hemos venido a adorarlo.</p>

<p><sup class="versenum">3&nbsp;</sup>Cuando lo oy&oacute; el rey Herodes, se turb&oacute;, y toda Jerusal&eacute;n con &eacute;l.<sup class="versenum">4&nbsp;</sup>As&iacute; que convoc&oacute; de entre el pueblo a todos los jefes de los sacerdotes y maestros de la ley, y les pregunt&oacute; d&oacute;nde hab&iacute;a de nacer el Cristo.</p>

<p><sup class="versenum">5&nbsp;</sup>&mdash;En Bel&eacute;n de Judea &mdash;le respondieron&mdash;, porque esto es lo que ha escrito el profeta:</p>

<p><sup class="versenum">6&nbsp;</sup>&raquo;&ldquo;Pero t&uacute;, Bel&eacute;n, en la tierra de Jud&aacute;,<br />
&nbsp;&nbsp;&nbsp;&nbsp;de ninguna manera eres la menor entre los principales de Jud&aacute;;<br />
porque de ti saldr&aacute; un pr&iacute;ncipe<br />
&nbsp;&nbsp;&nbsp;&nbsp;que ser&aacute; el pastor de mi pueblo Israel&rdquo;&raquo;.</p>
</div>

<p><sup class="versenum">7&nbsp;</sup>Luego Herodes llam&oacute; en secreto a los sabios y se enter&oacute; por ellos del tiempo exacto en que hab&iacute;a aparecido la estrella.<sup class="versenum">8&nbsp;</sup>Los envi&oacute; a Bel&eacute;n y les dijo:</p>

<p>&mdash;Vayan e inf&oacute;rmense bien de ese ni&ntilde;o y, tan pronto como lo encuentren, av&iacute;senme para que yo tambi&eacute;n vaya y lo adore.</p>

<p><sup class="versenum">9&nbsp;</sup>Despu&eacute;s de o&iacute;r al rey, siguieron su camino, y sucedi&oacute; que la estrella que hab&iacute;an visto levantarse iba delante de ellos hasta que se detuvo sobre el lugar donde estaba el ni&ntilde;o.<sup class="versenum">10&nbsp;</sup>Al ver la estrella, se llenaron de alegr&iacute;a.<sup class="versenum">11&nbsp;</sup>Cuando llegaron a la casa, vieron al ni&ntilde;o con Mar&iacute;a, su madre; y postr&aacute;ndose lo adoraron. Abrieron sus cofres y le presentaron como regalos oro, incienso y mirra.<sup class="versenum">12&nbsp;</sup>Entonces, advertidos en sue&ntilde;os de que no volvieran a Herodes, regresaron a su tierra por otro camino.</p>

<h3>La huida a Egipto</h3>

<p><sup class="versenum">13&nbsp;</sup>Cuando ya se hab&iacute;an ido, un &aacute;ngel del Se&ntilde;or se le apareci&oacute; en sue&ntilde;os a Jos&eacute; y le dijo: &laquo;Lev&aacute;ntate, toma al ni&ntilde;o y a su madre, y huye a Egipto. Qu&eacute;date all&iacute; hasta que yo te avise, porque Herodes va a buscar al ni&ntilde;o para matarlo&raquo;.</p>

<p><sup class="versenum">14&nbsp;</sup>As&iacute; que se levant&oacute; cuando todav&iacute;a era de noche, tom&oacute; al ni&ntilde;o y a su madre, y parti&oacute; para Egipto,<sup class="versenum">15&nbsp;</sup>donde permaneci&oacute; hasta la muerte de Herodes. De este modo se cumpli&oacute; lo que el Se&ntilde;or hab&iacute;a dicho por medio del profeta: &laquo;De Egipto llam&eacute; a mi hijo&raquo;.</p>

<p><sup class="versenum">16&nbsp;</sup>Cuando Herodes se dio cuenta de que los sabios se hab&iacute;an burlado de &eacute;l, se enfureci&oacute; y mand&oacute; matar a todos los ni&ntilde;os menores de dos a&ntilde;os en Bel&eacute;n y en sus alrededores, de acuerdo con el tiempo que hab&iacute;a averiguado de los sabios.<sup class="versenum">17&nbsp;</sup>Entonces se cumpli&oacute; lo dicho por el profeta Jerem&iacute;as:</p>

<p><sup class="versenum">18&nbsp;</sup>&laquo;Se oye un grito en Ram&aacute;,<br />
&nbsp;&nbsp;&nbsp;&nbsp;llanto y gran lamentaci&oacute;n;<br />
es Raquel, que llora por sus hijos<br />
&nbsp;&nbsp;&nbsp;&nbsp;y no quiere ser consolada;<br />
&iexcl;sus hijos ya no existen!&raquo;</p>
<!-- end bible -->

<p class="bible"></p>

</div>


<button id="MC2/spa/video/multiply2/203.mp4" type="button" class="external-movie">
         Mira &nbsp;Mateo 2:1-18&nbsp;</button>
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

<p class="up">Jes&uacute;s tuvo una infancia como t&uacute; y como yo. Fue reconocido como rey por astr&oacute;logos gentiles (no jud&iacute;os) que dieron regalos a la familia. Jes&uacute;s tambi&eacute;n era un refugiado. Tal vez los regalos se utilizaron para ayudar a la familia mientras hu&iacute;an a Egipto para escapar del rey Herodes. Dios contin&uacute;a proveyendo a la familia a medida que Jes&uacute;s creci&oacute;. Cuando fue seguro, Dios los dirigi&oacute; de vuelta a su patria.</p>

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

			<td class="social" @click="share('lesson', 'Jesús como un niño: ', '/content/M2/spa/multiply2/multiply203.html')">
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