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
                        <div class="chapter_number ltr"><h1>45.</h1></div>
                        <div class="chapter_title ltr"><h1>El testimonio de Pablo a los judíos</h1></div>
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
	<li class="back">Lea o vea <strong>Hechos 21:37-22:21</strong> dos veces mientras todos escuchan</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Lee Hechos 21:37-22:21</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>Pablo se dirige a la multitud</h3>

<p><sup class="versenum">37&nbsp;</sup>Cuando los soldados estaban a punto de meterlo en el cuartel, Pablo le pregunt&oacute; al comandante:</p>

<p>&mdash;&iquest;Me permite decirle algo?</p>

<p>&mdash;&iquest;Hablas griego? &mdash;replic&oacute; el comandante&mdash;.<sup class="versenum">38&nbsp;</sup>&iquest;No eres el egipcio que hace alg&uacute;n tiempo provoc&oacute; una rebeli&oacute;n y llev&oacute; al desierto a cuatro mil guerrilleros?</p>

<p><sup class="versenum">39&nbsp;</sup>&mdash;No, yo soy jud&iacute;o, natural de Tarso, una ciudad muy importante de Cilicia &mdash;le respondi&oacute; Pablo&mdash;. Por favor, perm&iacute;tame hablarle al pueblo.</p>

<p><sup class="versenum">40&nbsp;</sup>Con el permiso del comandante, Pablo se puso de pie en las gradas e hizo una se&ntilde;al con la mano a la multitud. Cuando todos guardaron silencio, les dijo en arameo:</p>

<p><sup class="versenum">1 </sup>&laquo;Padres y hermanos, escuchen ahora mi defensa&raquo;.</p>

<p><sup class="versenum">2&nbsp;</sup>Al o&iacute;r que les hablaba en arameo, guardaron m&aacute;s silencio.</p>

<p>Pablo continu&oacute;:<sup class="versenum">3&nbsp;</sup>&laquo;Yo soy jud&iacute;o, nacido en Tarso de Cilicia, pero criado en esta ciudad. Bajo la tutela de Gamaliel recib&iacute; instrucci&oacute;n cabal en la ley de nuestros antepasados, y fui tan celoso de Dios como cualquiera de ustedes lo es hoy d&iacute;a.<sup class="versenum">4&nbsp;</sup>Persegu&iacute; a muerte a los seguidores de este Camino, arrestando y echando en la c&aacute;rcel a hombres y mujeres por igual,<sup class="versenum">5&nbsp;</sup>y as&iacute; lo pueden atestiguar el sumo sacerdote y todo el Consejo de ancianos. Incluso obtuve de parte de ellos cartas de extradici&oacute;n para nuestros hermanos jud&iacute;os en Damasco, y fui all&aacute; con el fin de traer presos a Jerusal&eacute;n a los que encontrara, para que fueran castigados.</p>

<p><sup class="versenum">6&nbsp;</sup>&raquo;Sucedi&oacute; que a eso del mediod&iacute;a, cuando me acercaba a Damasco, una intensa luz del cielo relampague&oacute; de repente a mi alrededor.<sup class="versenum">7&nbsp;</sup>Ca&iacute; al suelo y o&iacute; una voz que me dec&iacute;a: &ldquo;Saulo, Saulo, &iquest;por qu&eacute; me persigues?&rdquo;<sup class="versenum">8&nbsp;</sup>&ldquo;&iquest;Qui&eacute;n eres, Se&ntilde;or?&rdquo;, pregunt&eacute;. &ldquo;Yo soy Jes&uacute;s de Nazaret, a quien t&uacute; persigues&rdquo;, me contest&oacute; &eacute;l.<sup class="versenum">9&nbsp;</sup>Los que me acompa&ntilde;aban vieron la luz, pero no percibieron la voz del que me hablaba.<sup class="versenum">10&nbsp;</sup>&ldquo;&iquest;Qu&eacute; debo hacer, Se&ntilde;or?&rdquo;, le pregunt&eacute;. &ldquo;Lev&aacute;ntate &mdash;dijo el Se&ntilde;or&mdash;, y entra en Damasco. All&iacute; se te dir&aacute; todo lo que se ha dispuesto que hagas&rdquo;.<sup class="versenum">11&nbsp;</sup>Mis compa&ntilde;eros me llevaron de la mano hasta Damasco porque el resplandor de aquella luz me hab&iacute;a dejado ciego.</p>

<p><sup class="versenum">12&nbsp;</sup>&raquo;Vino a verme un tal Anan&iacute;as, hombre devoto que observaba la ley y a quien respetaban mucho los jud&iacute;os que all&iacute; viv&iacute;an.<sup class="versenum">13&nbsp;</sup>Se puso a mi lado y me dijo: &ldquo;Hermano Saulo, &iexcl;recibe la vista!&rdquo; Y en aquel mismo instante recobr&eacute; la vista y pude verlo.<sup class="versenum">14&nbsp;</sup>Luego dijo: &ldquo;El Dios de nuestros antepasados te ha escogido para que conozcas su voluntad, y para que veas al Justo y oigas las palabras de su boca.<sup class="versenum">15&nbsp;</sup>T&uacute; le ser&aacute;s testigo ante toda persona de lo que has visto y o&iacute;do.<sup class="versenum">16&nbsp;</sup>Y ahora, &iquest;qu&eacute; esperas? Lev&aacute;ntate, baut&iacute;zate y l&aacute;vate de tus pecados, invocando su nombre&rdquo;.</p>

<p><sup class="versenum">17&nbsp;</sup>&raquo;Cuando volv&iacute; a Jerusal&eacute;n, mientras oraba en el templo tuve una visi&oacute;n<sup class="versenum">18&nbsp;</sup>y vi al Se&ntilde;or que me hablaba: &ldquo;&iexcl;Date prisa! Sal inmediatamente de Jerusal&eacute;n, porque no aceptar&aacute;n tu testimonio acerca de m&iacute;&rdquo;.<sup class="versenum">19&nbsp;</sup>&ldquo;Se&ntilde;or &mdash;le respond&iacute;&mdash;, ellos saben que yo andaba de sinagoga en sinagoga encarcelando y azotando a los que creen en ti;<sup class="versenum">20&nbsp;</sup>y, cuando se derramaba la sangre de tu testigo Esteban, ah&iacute; estaba yo, dando mi aprobaci&oacute;n y cuidando la ropa de quienes lo mataban&rdquo;.<sup class="versenum">21&nbsp;</sup>Pero el Se&ntilde;or me replic&oacute;: &ldquo;Vete; yo te enviar&eacute; lejos, a los gentiles&rdquo;&raquo;.</p>
<!-- end bible -->

<p class="bible"></p>

</div>


<button id="MC2/spa/video/multiply3/345.mp4" type="button" class="external-movie">
         Mira &nbsp;Hechos 21:37-22:21&nbsp;</button>
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

<p class="up">El Se&ntilde;or hab&iacute;a preparado a Pablo para este momento a trav&eacute;s de su vida en Tarso, su educaci&oacute;n griega, su formaci&oacute;n como maestro religioso jud&iacute;o y sus experiencias misioneras. Esta es la primera vez que Lucas, el escritor de Hechos, registra a Pablo compartiendo su testimonio. Pablo le dijo a la iglesia en Roma que no se avergonzar&iacute;a del Evangelio (Romanos 1:16), y continu&oacute; compartiendo el Evangelio sin importar las circunstancias o las consecuencias. Pablo aprovecha la oportunidad para testificar a sus compatriotas compartiendo: su vida antes de conocer al Jes&uacute;s vivo, c&oacute;mo conoci&oacute; a Jes&uacute;s, y c&oacute;mo Jes&uacute;s cambi&oacute; su vida y su misi&oacute;n. M&aacute;s tarde, Pablo animar&iacute;a a sus l&iacute;deres de la pr&oacute;xima generaci&oacute;n, Timoteo y Tito, a estar listos para cada oportunidad de compartir su experiencia y conocimiento de Jes&uacute;s (Tito 3:1; 2 Timoteo 4:2). Del propio testimonio de Pablo aprendemos que tanto hombres como mujeres en la iglesia primitiva sufrieron por su fe en Jes&uacute;s (Hechos 22:4). Los jud&iacute;os tropezaban constantemente con la idea de que Dios aceptar&iacute;a a todas las personas sin observar las pr&aacute;cticas religiosas jud&iacute;as.</p>

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

			<td class="social" @click="share('lesson', 'El testimonio de Pablo a los judíos: ', '/content/M2/spa/multiply3/multiply345.html')">
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