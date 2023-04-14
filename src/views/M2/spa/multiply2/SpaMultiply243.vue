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
                        <div class="chapter_number ltr"><h1>43.</h1></div>
                        <div class="chapter_title ltr"><h1>Multiplicación de liderazgo</h1></div>
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
	<li class="back">Lea o vea <strong>Lucas 10</strong>&nbsp;dos veces mientras todos escuchan</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Lee Lucas 10</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>Jes&uacute;s env&iacute;a a los setenta y dos</h3>

<p><sup class="versenum">1 </sup>Despu&eacute;s de esto, el Se&ntilde;or escogi&oacute; a otros setenta y dos para enviarlos de dos en dos delante de &eacute;l a todo pueblo y lugar adonde &eacute;l pensaba ir.<sup class="versenum">2&nbsp;</sup>&laquo;Es abundante la cosecha &mdash;les dijo&mdash;, pero son pocos los obreros. P&iacute;danle, por tanto, al Se&ntilde;or de la cosecha que mande obreros a su campo.<sup class="versenum">3&nbsp;</sup>&iexcl;Vayan ustedes! Miren que los env&iacute;o como corderos en medio de lobos.<sup class="versenum">4&nbsp;</sup>No lleven monedero ni bolsa ni sandalias; ni se detengan a saludar a nadie por el camino.</p>

<p><sup class="versenum">5&nbsp;</sup>&raquo;Cuando entren en una casa, digan primero: &ldquo;Paz a esta casa&rdquo;.<sup class="versenum">6&nbsp;</sup>Si hay all&iacute; alguien digno de paz, gozar&aacute; de ella; y, si no, la bendici&oacute;n no se cumplir&aacute;.<sup class="versenum">7&nbsp;</sup>Qu&eacute;dense en esa casa, y coman y beban de lo que ellos tengan, porque el trabajador tiene derecho a su sueldo. No anden de casa en casa.</p>

<p><sup class="versenum">8&nbsp;</sup>&raquo;Cuando entren en un pueblo y los reciban, coman lo que les sirvan.<sup class="versenum">9&nbsp;</sup>Sanen a los enfermos que encuentren all&iacute; y d&iacute;ganles: &ldquo;El reino de Dios ya est&aacute; cerca de ustedes&rdquo;.<sup class="versenum">10&nbsp;</sup>Pero, cuando entren en un pueblo donde no los reciban, salgan a las plazas y digan:<sup class="versenum">11&nbsp;</sup>&ldquo;Aun el polvo de este pueblo, que se nos ha pegado a los pies, nos lo sacudimos en protesta contra ustedes. Pero tengan por seguro que ya est&aacute; cerca el reino de Dios&rdquo;.<sup class="versenum">12&nbsp;</sup>Les digo que en aquel d&iacute;a ser&aacute; m&aacute;s tolerable el castigo para Sodoma que para ese pueblo.</p>

<p><sup class="versenum">13&nbsp;</sup>&raquo;&iexcl;Ay de ti, Coraz&iacute;n! &iexcl;Ay de ti, Betsaida! Si se hubieran hecho en Tiro y en Sid&oacute;n los milagros que se hicieron en medio de ustedes, ya hace tiempo que se habr&iacute;an arrepentido con grandes lamentos.<sup class="versenum">14&nbsp;</sup>Pero en el juicio ser&aacute; m&aacute;s tolerable el castigo para Tiro y Sid&oacute;n que para ustedes.<sup class="versenum">15&nbsp;</sup>Y t&uacute;, Caperna&uacute;m, &iquest;acaso ser&aacute;s levantada hasta el cielo? No, sino que descender&aacute;s hasta el abismo.</p>

<p><sup class="versenum">16&nbsp;</sup>&raquo;El que los escucha a ustedes, me escucha a m&iacute;; el que los rechaza a ustedes, me rechaza a m&iacute;; y el que me rechaza a m&iacute;, rechaza al que me envi&oacute;&raquo;.</p>

<p><sup class="versenum">17&nbsp;</sup>Cuando los setenta y dos regresaron, dijeron contentos:</p>

<p>&mdash;Se&ntilde;or, hasta los demonios se nos someten en tu nombre.</p>

<p><sup class="versenum">18&nbsp;</sup>&mdash;Yo ve&iacute;a a Satan&aacute;s caer del cielo como un rayo &mdash;respondi&oacute; &eacute;l&mdash;.<sup class="versenum">19&nbsp;</sup>S&iacute;, les he dado autoridad a ustedes para pisotear serpientes y escorpiones y vencer todo el poder del enemigo; nada les podr&aacute; hacer da&ntilde;o.<sup class="versenum">20&nbsp;</sup>Sin embargo, no se alegren de que puedan someter a los esp&iacute;ritus, sino al&eacute;grense de que sus nombres est&aacute;n escritos en el cielo.</p>

<p><sup class="versenum">21&nbsp;</sup>En aquel momento Jes&uacute;s, lleno de alegr&iacute;a por el Esp&iacute;ritu Santo, dijo: &laquo;Te alabo, Padre, Se&ntilde;or del cielo y de la tierra, porque habiendo escondido estas cosas de los sabios e instruidos, se las has revelado a los que son como ni&ntilde;os. S&iacute;, Padre, porque esa fue tu buena voluntad.</p>

<p><sup class="versenum">22&nbsp;</sup>&raquo;Mi Padre me ha entregado todas las cosas. Nadie sabe qui&eacute;n es el Hijo, sino el Padre, y nadie sabe qui&eacute;n es el Padre, sino el Hijo y aquel a quien el Hijo quiera revel&aacute;rselo&raquo;.</p>

<p><sup class="versenum">23&nbsp;</sup>Volvi&eacute;ndose a sus disc&iacute;pulos, les dijo aparte: &laquo;Dichosos los ojos que ven lo que ustedes ven.<sup class="versenum">24&nbsp;</sup>Les digo que muchos profetas y reyes quisieron ver lo que ustedes ven, pero no lo vieron; y o&iacute;r lo que ustedes oyen, pero no lo oyeron&raquo;.</p>

<h3>Par&aacute;bola del buen samaritano</h3>

<p><sup class="versenum">25&nbsp;</sup>En esto se present&oacute; un experto en la ley y, para poner a prueba a Jes&uacute;s, le hizo esta pregunta:</p>

<p>&mdash;Maestro, &iquest;qu&eacute; tengo que hacer para heredar la vida eterna?</p>

<p><sup class="versenum">26&nbsp;</sup>Jes&uacute;s replic&oacute;:</p>

<p>&mdash;&iquest;Qu&eacute; est&aacute; escrito en la ley? &iquest;C&oacute;mo la interpretas t&uacute;?</p>

<p><sup class="versenum">27&nbsp;</sup>Como respuesta el hombre cit&oacute;:</p>

<p>&mdash;&ldquo;Ama al Se&ntilde;or tu Dios con todo tu coraz&oacute;n, con todo tu ser, con todas tus fuerzas y con toda tu mente&rdquo;, y: &ldquo;Ama a tu pr&oacute;jimo como a ti mismo&rdquo;.</p>

<p><sup class="versenum">28&nbsp;</sup>&mdash;Bien contestado &mdash;le dijo Jes&uacute;s&mdash;. Haz eso y vivir&aacute;s.</p>

<p><sup class="versenum">29&nbsp;</sup>Pero &eacute;l quer&iacute;a justificarse, as&iacute; que le pregunt&oacute; a Jes&uacute;s:</p>

<p>&mdash;&iquest;Y qui&eacute;n es mi pr&oacute;jimo?</p>

<p><sup class="versenum">30&nbsp;</sup>Jes&uacute;s respondi&oacute;:</p>

<p>&mdash;Bajaba un hombre de Jerusal&eacute;n a Jeric&oacute;, y cay&oacute; en manos de unos ladrones. Le quitaron la ropa, lo golpearon y se fueron, dej&aacute;ndolo medio muerto.<sup class="versenum">31&nbsp;</sup>Resulta que viajaba por el mismo camino un sacerdote quien, al verlo, se desvi&oacute; y sigui&oacute; de largo.<sup class="versenum">32&nbsp;</sup>As&iacute; tambi&eacute;n lleg&oacute; a aquel lugar un levita y, al verlo, se desvi&oacute; y sigui&oacute; de largo.<sup class="versenum">33&nbsp;</sup>Pero un samaritano que iba de viaje lleg&oacute; adonde estaba el hombre y, vi&eacute;ndolo, se compadeci&oacute; de &eacute;l.<sup class="versenum">34&nbsp;</sup>Se acerc&oacute;, le cur&oacute; las heridas con vino y aceite, y se las vend&oacute;. Luego lo mont&oacute; sobre su propia cabalgadura, lo llev&oacute; a un alojamiento y lo cuid&oacute;.<sup class="versenum">35&nbsp;</sup>Al d&iacute;a siguiente, sac&oacute; dos monedas de plata y se las dio al due&ntilde;o del alojamiento. &ldquo;Cu&iacute;demelo &mdash;le dijo&mdash;, y lo que gaste usted de m&aacute;s, se lo pagar&eacute; cuando yo vuelva&rdquo;.<sup class="versenum">36&nbsp;</sup>&iquest;Cu&aacute;l de estos tres piensas que demostr&oacute; ser el pr&oacute;jimo del que cay&oacute; en manos de los ladrones?</p>

<p><sup class="versenum">37&nbsp;</sup>&mdash;El que se compadeci&oacute; de &eacute;l &mdash;contest&oacute; el experto en la ley.</p>

<p>&mdash;Anda entonces y haz t&uacute; lo mismo &mdash;concluy&oacute; Jes&uacute;s.</p>

<h3>En casa de Marta y Mar&iacute;a</h3>

<p><sup class="versenum">38&nbsp;</sup>Mientras iba de camino con sus disc&iacute;pulos, Jes&uacute;s entr&oacute; en una aldea, y una mujer llamada Marta lo recibi&oacute; en su casa.<sup class="versenum">39&nbsp;</sup>Ten&iacute;a ella una hermana llamada Mar&iacute;a que, sentada a los pies del Se&ntilde;or, escuchaba lo que &eacute;l dec&iacute;a.<sup class="versenum">40&nbsp;</sup>Marta, por su parte, se sent&iacute;a abrumada porque ten&iacute;a mucho que hacer. As&iacute; que se acerc&oacute; a &eacute;l y le dijo:</p>

<p>&mdash;Se&ntilde;or, &iquest;no te importa que mi hermana me haya dejado sirviendo sola? &iexcl;Dile que me ayude!</p>

<p><sup class="versenum">41&nbsp;</sup>&mdash;Marta, Marta &mdash;le contest&oacute; Jes&uacute;s&mdash;, est&aacute;s inquieta y preocupada por muchas cosas,<sup class="versenum">42&nbsp;</sup>pero solo una es necesaria. Mar&iacute;a ha escogido la mejor, y nadie se la quitar&aacute;.</p>
<!-- end bible -->

<p class="bible"></p>

</div>


<button id="MC2/spa/video/multiply2/243.mp4" type="button" class="external-movie">
         Mira &nbsp;Lucas 10&nbsp;</button>
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
<p class="up">Despu&eacute;s de la Fiesta de la Dedicaci&oacute;n, Jes&uacute;s viaja al otro lado del r&iacute;o Jord&aacute;n, donde Juan lo bautiz&oacute; tres a&ntilde;os antes. Jes&uacute;s usa esto como base para los pr&oacute;ximos meses. Levanta a otros 70 l&iacute;deres y los nombra como lo hizo con los primeros 12. Les da las mismas instrucciones y los env&iacute;a de dos en dos por todo el distrito de Perea. Esta es otra reestructuraci&oacute;n del ministerio. Ahora hay 35 nuevos equipos adem&aacute;s de Jes&uacute;s y los 12, totales de 36 equipos itinerantes. Al igual que los primeros 12, son enviados sin nada, haciendo que dependan del Padre. &Eacute;l quiere proporcionar todo lo que necesitar&aacute;n. Los equipos se extienden para visitar cada pueblo. Encuentran casas de paz orando por la gente, cuidando sus necesidades y compartiendo sobre el Reino. Cuando regresan, est&aacute;n tan entusiasmados con que Dios los use. Jes&uacute;s pone los resultados del ministerio en la perspectiva adecuada al recordarles que su emoci&oacute;n debe ser acerca de que sus nombres est&eacute;n escritos en el Libro de la Vida. Jes&uacute;s estalla en alabanza gozosa por ver el plan funcionando. La voluntad del Padre era que Jes&uacute;s morir&iacute;a en la cruz, pero la obra del Padre era que Jes&uacute;s har&iacute;a disc&iacute;pulos, que har&iacute;a disc&iacute;pulos que har&iacute;an disc&iacute;pulos.</p>

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

			<td class="social" @click="share('lesson', 'Multiplicación de liderazgo: ', '/content/M2/spa/multiply2/multiply243.html')">
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