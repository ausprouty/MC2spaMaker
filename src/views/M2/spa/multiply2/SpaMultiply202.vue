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
                        <div class="chapter_number ltr"><h1>2.</h1></div>
                        <div class="chapter_title ltr"><h1>Jesús como un bebé (Encarnación)</h1></div>
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
	<li class="back">Lea o vea <strong>Juan 1:14-18</strong> dos veces mientras todos escuchan</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Lee Juan 1:14-18</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<p><sup class="versenum">14&nbsp;</sup>Y el Verbo se hizo hombre y habit&oacute; entre nosotros. Y hemos contemplado su gloria, la gloria que corresponde al Hijo unig&eacute;nito del Padre, lleno de gracia y de verdad.</p>

<p><sup class="versenum">15&nbsp;</sup>Juan dio testimonio de &eacute;l, y a voz en cuello proclam&oacute;: &laquo;Este es aquel de quien yo dec&iacute;a: &ldquo;El que viene despu&eacute;s de m&iacute; es superior a m&iacute;, porque exist&iacute;a antes que yo&rdquo;&raquo;.<sup class="versenum">16&nbsp;</sup>De su plenitud todos hemos recibido gracia sobre gracia,<sup class="versenum">17&nbsp;</sup>pues la ley fue dada por medio de Mois&eacute;s, mientras que la gracia y la verdad nos han llegado por medio de Jesucristo.<sup class="versenum">18&nbsp;</sup>A Dios nadie lo ha visto nunca; el Hijo unig&eacute;nito, que es Dios y que vive en uni&oacute;n &iacute;ntima con el Padre, nos lo ha dado a conocer.</p>
<!-- end bible -->

<p class="bible"></p>

</div>


<button id="MC2/spa/video/multiply2/202.mp4" type="button" class="external-movie">
         Mira &nbsp;Juan 1:14-18&nbsp;</button>
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

<ul>
	<li class="nobreak-final-final">Lea <span class="popup-link" @click = "popUp('pop3')"> Colosenses 1:15-20</span>

	<div class="popup invisible" id="pop3"><!-- begin bible -->
	<div>
	<p><sup class="versenum">15&nbsp;</sup>&Eacute;l es la imagen del Dios invisible,<br />
	&nbsp;&nbsp;&nbsp;&nbsp;el primog&eacute;nito de toda creaci&oacute;n,<br />
	<sup class="versenum">16&nbsp;</sup>porque por medio de &eacute;l fueron creadas todas las cosas<br />
	&nbsp;&nbsp;&nbsp;&nbsp;en el cielo y en la tierra, visibles e invisibles,<br />
	&nbsp;&nbsp;&nbsp;&nbsp;sean tronos, poderes, principados o autoridades:<br />
	todo ha sido creado<br />
	&nbsp;&nbsp;&nbsp;&nbsp;por medio de &eacute;l y para &eacute;l.<br />
	<sup class="versenum">17&nbsp;</sup>&Eacute;l es anterior a todas las cosas,<br />
	&nbsp;&nbsp;&nbsp;&nbsp;que por medio de &eacute;l forman un todo coherente.<br />
	<sup class="versenum">18&nbsp;</sup>&Eacute;l es la cabeza del cuerpo,<br />
	&nbsp;&nbsp;&nbsp;&nbsp;que es la iglesia.<br />
	&Eacute;l es el principio,<br />
	&nbsp;&nbsp;&nbsp;&nbsp;el primog&eacute;nito de la resurrecci&oacute;n,<br />
	&nbsp;&nbsp;&nbsp;&nbsp;para ser en todo el primero.<br />
	<sup class="versenum">19&nbsp;</sup>Porque a Dios le agrad&oacute; habitar en &eacute;l con toda su plenitud<br />
	<sup class="versenum">20&nbsp;</sup>&nbsp;&nbsp;&nbsp;&nbsp;y, por medio de &eacute;l, reconciliar consigo todas las cosas,<br />
	tanto las que est&aacute;n en la tierra como las que est&aacute;n en el cielo,<br />
	&nbsp;&nbsp;&nbsp;&nbsp;haciendo la paz mediante la sangre que derram&oacute; en la cruz.</p>
	</div>
	<!-- end bible --></div>
	y <span class="popup-link" @click = "popUp('pop4')"> Hebreos 2:17</span>.

	<div class="popup invisible" id="pop4"><!-- begin bible -->
	<p><sup class="versenum">17&nbsp;</sup>Por eso era preciso que en todo se asemejara a sus hermanos, para ser un sumo sacerdote fiel y misericordioso al servicio de Dios, a fin de expiar los pecados del pueblo.</p>
	<!-- end bible --></div>
	Jes&uacute;s deja la gloria del cielo por una tierra en la derrota, una tierra en bajeza. La Biblia dice que &quot;&Eacute;l fue hecho como nosotros en todos los sentidos&quot;. &iexcl;Jes&uacute;s hizo un gran sacrificio para convertirse en uno de nosotros! El Creador entra en la creaci&oacute;n, para que &Eacute;l sea nuestro sumo sacerdote y nuestro camino a Dios (<span class="popup-link" @click = "popUp('pop5')"> Juan 14:6</span>).

	<div class="popup invisible" id="pop5"><!-- begin bible -->
	<p><sup class="versenum">6&nbsp;</sup>&mdash;Yo soy el camino, la verdad y la vida &mdash;le contest&oacute; Jes&uacute;s&mdash;. Nadie llega al Padre sino por m&iacute;.</p>
	<!-- end bible --></div>
	&nbsp;</li>
	<li class="nobreak-final-final">Estudio adicional: <span class="popup-link" @click = "popUp('pop6')"> Lucas 2:1-20</span>;
	<div class="popup invisible" id="pop6"><!-- begin bible -->
	<h3>Nacimiento de Jes&uacute;s</h3>

	<p><sup class="versenum">1 </sup>Por aquellos d&iacute;as Augusto C&eacute;sar decret&oacute; que se levantara un censo en todo el Imperio romano.<sup class="versenum">2&nbsp;</sup>(Este primer censo se efectu&oacute; cuando Cirenio gobernaba en Siria).<sup class="versenum">3&nbsp;</sup>As&iacute; que iban todos a inscribirse, cada cual a su propio pueblo.</p>

	<p><sup class="versenum">4&nbsp;</sup>Tambi&eacute;n Jos&eacute;, que era descendiente del rey David, subi&oacute; de Nazaret, ciudad de Galilea, a Judea. Fue a Bel&eacute;n, la Ciudad de David,<sup class="versenum">5&nbsp;</sup>para inscribirse junto con Mar&iacute;a su esposa. Ella se encontraba encinta<sup class="versenum">6&nbsp;</sup>y, mientras estaban all&iacute;, se le cumpli&oacute; el tiempo.<sup class="versenum">7&nbsp;</sup>As&iacute; que dio a luz a su hijo primog&eacute;nito. Lo envolvi&oacute; en pa&ntilde;ales y lo acost&oacute; en un pesebre, porque no hab&iacute;a lugar para ellos en la posada.</p>

	<p><sup class="versenum">8&nbsp;</sup>En esa misma regi&oacute;n hab&iacute;a unos pastores que pasaban la noche en el campo, turn&aacute;ndose para cuidar sus reba&ntilde;os.<sup class="versenum">9&nbsp;</sup>Sucedi&oacute; que un &aacute;ngel del Se&ntilde;or se les apareci&oacute;. La gloria del Se&ntilde;or los envolvi&oacute; en su luz, y se llenaron de temor.<sup class="versenum">10&nbsp;</sup>Pero el &aacute;ngel les dijo: &laquo;No tengan miedo. Miren que les traigo buenas noticias que ser&aacute;n motivo de mucha alegr&iacute;a para todo el pueblo.<sup class="versenum">11&nbsp;</sup>Hoy les ha nacido en la Ciudad de David un Salvador, que es Cristo el Se&ntilde;or.<sup class="versenum">12&nbsp;</sup>Esto les servir&aacute; de se&ntilde;al: Encontrar&aacute;n a un ni&ntilde;o envuelto en pa&ntilde;ales y acostado en un pesebre&raquo;.</p>

	<p><sup class="versenum">13&nbsp;</sup>De repente apareci&oacute; una multitud de &aacute;ngeles del cielo, que alababan a Dios y dec&iacute;an:</p>

	<p><sup class="versenum">14&nbsp;</sup>&laquo;Gloria a Dios en las alturas,<br />
	&nbsp;&nbsp;&nbsp;&nbsp;y en la tierra paz a los que gozan de su buena voluntad&raquo;.</p>

	<p><sup class="versenum">15&nbsp;</sup>Cuando los &aacute;ngeles se fueron al cielo, los pastores se dijeron unos a otros: &laquo;Vamos a Bel&eacute;n, a ver esto que ha pasado y que el Se&ntilde;or nos ha dado a conocer&raquo;.</p>

	<p><sup class="versenum">16&nbsp;</sup>As&iacute; que fueron de prisa y encontraron a Mar&iacute;a y a Jos&eacute;, y al ni&ntilde;o que estaba acostado en el pesebre.<sup class="versenum">17&nbsp;</sup>Cuando vieron al ni&ntilde;o, contaron lo que les hab&iacute;an dicho acerca de &eacute;l,<sup class="versenum">18&nbsp;</sup>y cuantos lo oyeron se asombraron de lo que los pastores dec&iacute;an.<sup class="versenum">19&nbsp;</sup>Mar&iacute;a, por su parte, guardaba todas estas cosas en su coraz&oacute;n y meditaba acerca de ellas.<sup class="versenum">20&nbsp;</sup>Los pastores regresaron glorificando y alabando a Dios por lo que hab&iacute;an visto y o&iacute;do, pues todo sucedi&oacute; tal como se les hab&iacute;a dicho.</p>
	<!-- end bible --></div>
	<span class="popup-link" @click = "popUp('pop7')"> Mateo 1: 18-25</span>.

	<div class="popup invisible" id="pop7"><!-- begin bible -->
	<p><sup class="versenum">18&nbsp;</sup>El nacimiento de Jes&uacute;s, el Cristo, fue as&iacute;: Su madre, Mar&iacute;a, estaba comprometida para casarse con Jos&eacute;, pero, antes de unirse a &eacute;l, result&oacute; que estaba encinta por obra del Esp&iacute;ritu Santo.<sup class="versenum">19&nbsp;</sup>Como Jos&eacute;, su esposo, era un hombre justo y no quer&iacute;a exponerla a verg&uuml;enza p&uacute;blica, resolvi&oacute; divorciarse de ella en secreto.</p>

	<p><sup class="versenum">20&nbsp;</sup>Pero, cuando &eacute;l estaba considerando hacerlo, se le apareci&oacute; en sue&ntilde;os un &aacute;ngel del Se&ntilde;or y le dijo: &laquo;Jos&eacute;, hijo de David, no temas recibir a Mar&iacute;a por esposa, porque ella ha concebido por obra del Esp&iacute;ritu Santo.<sup class="versenum">21&nbsp;</sup>Dar&aacute; a luz un hijo, y le pondr&aacute;s por nombre Jes&uacute;s, porque &eacute;l salvar&aacute; a su pueblo de sus pecados&raquo;.</p>

	<p><sup class="versenum">22&nbsp;</sup>Todo esto sucedi&oacute; para que se cumpliera lo que el Se&ntilde;or hab&iacute;a dicho por medio del profeta:<sup class="versenum">23&nbsp;</sup>&laquo;La virgen concebir&aacute; y dar&aacute; a luz un hijo, y lo llamar&aacute;n Emanuel&raquo; (que significa &laquo;Dios con nosotros&raquo;).</p>

	<p><sup class="versenum">24&nbsp;</sup>Cuando Jos&eacute; se despert&oacute;, hizo lo que el &aacute;ngel del Se&ntilde;or le hab&iacute;a mandado y recibi&oacute; a Mar&iacute;a por esposa.<sup class="versenum">25&nbsp;</sup>Pero no tuvo relaciones conyugales con ella hasta que dio a luz un hijo, a quien le puso por nombre Jes&uacute;s.</p>
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

			<td class="social" @click="share('lesson', 'Jesús como un bebé (Encarnación): ', '/content/M2/spa/multiply2/multiply202.html')">
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