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
                        <div class="chapter_number ltr"><h1>12.</h1></div>
                        <div class="chapter_title ltr"><h1>La defensa de Esteban ante el Concilio</h1></div>
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

<ul><li class="nobreak-final-final">(Opcional) Jesucristo es el Se&ntilde;or, para la gloria de Dios Padre. &Eacute;l quiere que todos los hombres sean salvos y lleguen al conocimiento de la verdad. Porque hay un solo Dios y un mediador tambi&eacute;n entre Dios y el hombre, el hombre Jesucristo, que se entreg&oacute; a s&iacute; mismo como rescate por todos. (<span class="popup-link" @click = "popUp('pop1')"> Filipenses 2:11b</span>;

<div class="popup invisible" id="pop1"><!-- begin bible -->
<div>
<p><sup class="versenum">11&nbsp; </sup>&nbsp;...&nbsp; &nbsp;para gloria de Dios Padre.</p>
</div>
<!-- end bible --></div>
&nbsp;<span class="popup-link" @click = "popUp('pop2')"> 1 Timoteo 2:4-6a)</span>

<div class="popup invisible" id="pop2"><!-- begin bible -->
<p><sup class="versenum">4&nbsp;</sup>pues &eacute;l quiere que todos sean salvos y lleguen a conocer la verdad.<sup class="versenum">5&nbsp;</sup>Porque hay un solo Dios y un solo mediador entre Dios y los hombres, Jesucristo hombre,<sup class="versenum">6&nbsp;</sup>quien dio su vida como rescate por todos. Este testimonio Dios lo ha dado a su debido tiempo,</p>
</div>

</li></ul>

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
	<li class="back">Lea o vea <strong>Hechos 7:1-53</strong> dos veces mientras todos escuchan</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Lee Hechos 7:1-53</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<div>
<div>
<h3>Discurso de Esteban ante el Consejo</h3>

<p><sup class="versenum">1 </sup>&mdash;&iquest;Son ciertas estas acusaciones? &mdash;le pregunt&oacute; el sumo sacerdote.</p>

<p><sup class="versenum">2&nbsp;</sup>&Eacute;l contest&oacute;:</p>

<p>&mdash;Hermanos y padres, &iexcl;esc&uacute;chenme! El Dios de la gloria se apareci&oacute; a nuestro padre Abraham cuando este a&uacute;n viv&iacute;a en Mesopotamia, antes de radicarse en Jar&aacute;n.<sup class="versenum">3&nbsp;</sup>&ldquo;Deja tu tierra y a tus parientes &mdash;le dijo Dios&mdash;, y ve a la tierra que yo te mostrar&eacute;&rdquo;.</p>

<p><sup class="versenum">4&nbsp;</sup>&raquo;Entonces sali&oacute; de la tierra de los caldeos y se estableci&oacute; en Jar&aacute;n. Desde all&iacute;, despu&eacute;s de la muerte de su padre, Dios lo traslad&oacute; a esta tierra donde ustedes viven ahora.<sup class="versenum">5&nbsp;</sup>No le dio herencia alguna en ella, ni siquiera d&oacute;nde plantar el pie, pero le prometi&oacute; d&aacute;rsela en posesi&oacute;n a &eacute;l y a su descendencia, aunque Abraham no ten&iacute;a ni un solo hijo todav&iacute;a.<sup class="versenum">6&nbsp;</sup>Dios le dijo as&iacute;: &ldquo;Tus descendientes vivir&aacute;n como extranjeros en tierra extra&ntilde;a, donde ser&aacute;n esclavizados y maltratados durante cuatrocientos a&ntilde;os.<sup class="versenum">7&nbsp;</sup>Pero, sea cual sea la naci&oacute;n que los esclavice, yo la castigar&eacute;, y luego tus descendientes saldr&aacute;n de esa tierra y me adorar&aacute;n en este lugar&rdquo;.<sup class="versenum">8&nbsp;</sup>Hizo con Abraham el pacto que ten&iacute;a por se&ntilde;al la circuncisi&oacute;n. As&iacute;, cuando Abraham tuvo a su hijo Isaac, lo circuncid&oacute; a los ocho d&iacute;as de nacido, e Isaac a Jacob, y Jacob a los doce patriarcas.</p>

<p><sup class="versenum">9&nbsp;</sup>&raquo;Por envidia los patriarcas vendieron a Jos&eacute; como esclavo, quien fue llevado a Egipto; pero Dios estaba con &eacute;l<sup class="versenum">10&nbsp;</sup>y lo libr&oacute; de todas sus desgracias. Le dio sabidur&iacute;a para ganarse el favor del fara&oacute;n, rey de Egipto, que lo nombr&oacute; gobernador del pa&iacute;s y del palacio real.</p>

<p><sup class="versenum">11&nbsp;</sup>&raquo;Hubo entonces un hambre que azot&oacute; a todo Egipto y a Cana&aacute;n, causando mucho sufrimiento, y nuestros antepasados no encontraban alimentos.<sup class="versenum">12&nbsp;</sup>Al enterarse Jacob de que hab&iacute;a comida en Egipto, mand&oacute; all&aacute; a nuestros antepasados en una primera visita.<sup class="versenum">13&nbsp;</sup>En la segunda, Jos&eacute; se dio a conocer a sus hermanos, y el fara&oacute;n supo del origen de Jos&eacute;.<sup class="versenum">14&nbsp;</sup>Despu&eacute;s de esto, Jos&eacute; mand&oacute; llamar a su padre Jacob y a toda su familia, setenta y cinco personas en total.<sup class="versenum">15&nbsp;</sup>Baj&oacute; entonces Jacob a Egipto, y all&iacute; murieron &eacute;l y nuestros antepasados.<sup class="versenum">16&nbsp;</sup>Sus restos fueron llevados a Siqu&eacute;n y puestos en el sepulcro que a buen precio Abraham hab&iacute;a comprado a los hijos de Jamor en Siqu&eacute;n.</p>

<p><sup class="versenum">17&nbsp;</sup>&raquo;Cuando ya se acercaba el tiempo de que se cumpliera la promesa que Dios le hab&iacute;a hecho a Abraham, el pueblo crec&iacute;a y se multiplicaba en Egipto.<sup class="versenum">18&nbsp;</sup>Por aquel entonces subi&oacute; al trono de Egipto un nuevo rey que no sab&iacute;a nada de Jos&eacute;.<sup class="versenum">19&nbsp;</sup>Este rey us&oacute; de artima&ntilde;as con nuestro pueblo y oprimi&oacute; a nuestros antepasados, oblig&aacute;ndolos a dejar abandonados a sus hijos reci&eacute;n nacidos para que murieran.</p>

<p><sup class="versenum">20&nbsp;</sup>&raquo;En aquel tiempo naci&oacute; Mois&eacute;s, y fue agradable a los ojos de Dios. Por tres meses se cri&oacute; en la casa de su padre<sup class="versenum">21&nbsp;</sup>y, al quedar abandonado, la hija del fara&oacute;n lo adopt&oacute; y lo cri&oacute; como a su propio hijo.<sup class="versenum">22&nbsp;</sup>As&iacute; Mois&eacute;s fue instruido en toda la sabidur&iacute;a de los egipcios, y era poderoso en palabra y en obra.</p>

<p><sup class="versenum">23&nbsp;</sup>&raquo;Cuando cumpli&oacute; cuarenta a&ntilde;os, Mois&eacute;s tuvo el deseo de allegarse a sus hermanos israelitas.<sup class="versenum">24&nbsp;</sup>Al ver que un egipcio maltrataba a uno de ellos, acudi&oacute; en su defensa y lo veng&oacute; matando al egipcio.<sup class="versenum">25&nbsp;</sup>Mois&eacute;s supon&iacute;a que sus hermanos reconocer&iacute;an que Dios iba a liberarlos por medio de &eacute;l, pero ellos no lo comprendieron as&iacute;.<sup class="versenum">26&nbsp;</sup>Al d&iacute;a siguiente, Mois&eacute;s sorprendi&oacute; a dos israelitas que estaban peleando. Trat&oacute; de reconciliarlos, dici&eacute;ndoles: &ldquo;Se&ntilde;ores, ustedes son hermanos; &iquest;por qu&eacute; quieren hacerse da&ntilde;o?&rdquo;</p>

<p><sup class="versenum">27&nbsp;</sup>&raquo;Pero el que estaba maltratando al otro empuj&oacute; a Mois&eacute;s y le dijo: &ldquo;&iquest;Y qui&eacute;n te nombr&oacute; a ti gobernante y juez sobre nosotros?<sup class="versenum">28&nbsp;</sup>&iquest;Acaso quieres matarme a m&iacute;, como mataste ayer al egipcio?&rdquo;<sup class="versenum">29&nbsp;</sup>Al o&iacute;r esto, Mois&eacute;s huy&oacute; a Madi&aacute;n; all&iacute; vivi&oacute; como extranjero y tuvo dos hijos.</p>

<p><sup class="versenum">30&nbsp;</sup>&raquo;Pasados cuarenta a&ntilde;os, se le apareci&oacute; un &aacute;ngel en el desierto cercano al monte Sina&iacute;, en las llamas de una zarza que ard&iacute;a.<sup class="versenum">31&nbsp;</sup>Mois&eacute;s se asombr&oacute; de lo que ve&iacute;a. Al acercarse para observar, oy&oacute; la voz del Se&ntilde;or:<sup class="versenum">32&nbsp;</sup>&ldquo;Yo soy el Dios de tus antepasados, el Dios de Abraham, de Isaac y de Jacob&rdquo;. Mois&eacute;s se puso a temblar de miedo, y no se atrev&iacute;a a mirar.</p>

<p><sup class="versenum">33&nbsp;</sup>&raquo;Le dijo el Se&ntilde;or: &ldquo;Qu&iacute;tate las sandalias, porque est&aacute;s pisando tierra santa.<sup class="versenum">34&nbsp;</sup>Ciertamente he visto la opresi&oacute;n que sufre mi pueblo en Egipto. Los he escuchado quejarse, as&iacute; que he descendido para librarlos. Ahora ven y te enviar&eacute; de vuelta a Egipto&rdquo;.</p>

<p><sup class="versenum">35&nbsp;</sup>&raquo;A este mismo Mois&eacute;s, a quien hab&iacute;an rechazado dici&eacute;ndole: &ldquo;&iquest;Y qui&eacute;n te nombr&oacute; gobernante y juez?&rdquo;, Dios lo envi&oacute; para ser gobernante y libertador, mediante el poder del &aacute;ngel que se le apareci&oacute; en la zarza.<sup class="versenum">36&nbsp;</sup>&Eacute;l los sac&oacute; de Egipto haciendo prodigios y se&ntilde;ales milagrosas tanto en la tierra de Egipto como en el Mar Rojo, y en el desierto durante cuarenta a&ntilde;os.</p>

<p><sup class="versenum">37&nbsp;</sup>&raquo;Este Mois&eacute;s les dijo a los israelitas: &ldquo;Dios har&aacute; surgir para ustedes, de entre sus propios hermanos, un profeta como yo&rdquo;.<sup class="versenum">38&nbsp;</sup>Este mismo Mois&eacute;s estuvo en la asamblea en el desierto, con el &aacute;ngel que le habl&oacute; en el monte Sina&iacute;, y con nuestros antepasados. Fue tambi&eacute;n &eacute;l quien recibi&oacute; palabras de vida para comunic&aacute;rnoslas a nosotros.</p>

<p><sup class="versenum">39&nbsp;</sup>&raquo;Nuestros antepasados no quisieron obedecerlo a &eacute;l, sino que lo rechazaron. Lo que realmente deseaban era volver a Egipto,<sup class="versenum">40&nbsp;</sup>por lo cual le dijeron a Aar&oacute;n: &ldquo;Tienes que hacernos dioses que vayan delante de nosotros, porque a ese Mois&eacute;s que nos sac&oacute; de Egipto, &iexcl;no sabemos qu&eacute; pudo haberle pasado!&rdquo;</p>

<p><sup class="versenum">41&nbsp;</sup>&raquo;Entonces se hicieron un &iacute;dolo en forma de becerro. Le ofrecieron sacrificios y tuvieron fiesta en honor de la obra de sus manos.<sup class="versenum">42&nbsp;</sup>Pero Dios les volvi&oacute; la espalda y los entreg&oacute; a que rindieran culto a los astros. As&iacute; est&aacute; escrito en el libro de los profetas:</p>

<p>&raquo;&ldquo;Casa de Israel, &iquest;acaso me ofrecieron ustedes sacrificios y ofrendas<br />
&nbsp;&nbsp;&nbsp;&nbsp;durante los cuarenta a&ntilde;os en el desierto?<br />
<sup class="versenum">43&nbsp;</sup>Por el contrario, ustedes se hicieron cargo del tabern&aacute;culo de Moloc,<br />
&nbsp;&nbsp;&nbsp;&nbsp;de la estrella del dios Ref&aacute;n,<br />
&nbsp;&nbsp;&nbsp;&nbsp;y de las im&aacute;genes que hicieron para adorarlas.<br />
Por lo tanto, los mandar&eacute; al exilio&rdquo; m&aacute;s all&aacute; de Babilonia.</p>
</div>

<p><sup class="versenum">44&nbsp;</sup>&raquo;Nuestros antepasados ten&iacute;an en el desierto el tabern&aacute;culo del testimonio, hecho como Dios le hab&iacute;a ordenado a Mois&eacute;s, seg&uacute;n el modelo que este hab&iacute;a visto.<sup class="versenum">45&nbsp;</sup>Despu&eacute;s de haber recibido el tabern&aacute;culo, lo trajeron consigo bajo el mando de Josu&eacute;, cuando conquistaron la tierra de las naciones que Dios expuls&oacute; de la presencia de ellos. All&iacute; permaneci&oacute; hasta el tiempo de David,<sup class="versenum">46&nbsp;</sup>quien disfrut&oacute; del favor de Dios y pidi&oacute; que le permitiera proveer una morada para el Dios de Jacob.<sup class="versenum">47&nbsp;</sup>Pero fue Salom&oacute;n quien construy&oacute; la casa.</p>

<p><sup class="versenum">48&nbsp;</sup>&raquo;Sin embargo, el Alt&iacute;simo no habita en casas construidas por manos humanas. Como dice el profeta:</p>

<p><sup class="versenum">49&nbsp;</sup>&raquo;&ldquo;El cielo es mi trono,<br />
&nbsp;&nbsp;&nbsp;&nbsp;y la tierra, el estrado de mis pies.<br />
&iquest;Qu&eacute; clase de casa me construir&aacute;n?<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&mdash;dice el Se&ntilde;or&mdash;.<br />
&nbsp;&nbsp;&nbsp;&nbsp;&iquest;O qu&eacute; lugar de descanso?<br />
<sup class="versenum">50&nbsp;</sup>&iquest;No es mi mano la que ha hecho todas estas cosas?&rdquo;</p>
</div>

<p><sup class="versenum">51&nbsp;</sup>&raquo;&iexcl;Tercos, duros de coraz&oacute;n y torpes de o&iacute;dos! Ustedes son iguales que sus antepasados: &iexcl;Siempre resisten al Esp&iacute;ritu Santo!<sup class="versenum">52&nbsp;</sup>&iquest;A cu&aacute;l de los profetas no persiguieron sus antepasados? Ellos mataron a los que de antemano anunciaron la venida del Justo, y ahora a este lo han traicionado y asesinado<sup class="versenum">53&nbsp;</sup>ustedes, que recibieron la ley promulgada por medio de &aacute;ngeles y no la han obedecido&raquo;.</p>
<!-- end bible -->

<p class="bible"></p>

</div>


<button id="MC2/spa/video/multiply3/312.mp4" type="button" class="external-movie">
         Mira &nbsp;Hechos 7:1-53&nbsp;</button>
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
<p class="up">Los jud&iacute;os de habla griega hab&iacute;an acusado a Esteban de hablar en contra del templo y de la Ley de Mois&eacute;s. En respuesta a estas acusaciones, Esteban cont&oacute; historias del Antiguo Testamento con las que los l&iacute;deres religiosos estaban familiarizados. Se&ntilde;al&oacute; que la presencia de Dios no est&aacute; ligada a un lugar f&iacute;sico. Incluso en la historia de Israel, Dios se les apareci&oacute; desde Mesopotamia hasta Egipto. &iexcl;Incluso se&ntilde;al&oacute; que Dios hab&iacute;a llamado a la tierra santa que estaba fuera de Israel! El testimonio de Esteban mostr&oacute; que Dios tom&oacute; la iniciativa con Su pueblo a lo largo de su historia: Habl&oacute;, envi&oacute;, prometi&oacute;, castig&oacute; y rescat&oacute;. A pesar de que Dios hab&iacute;a actuado, el pueblo siempre resisti&oacute; e incluso mat&oacute; a los profetas que Dios envi&oacute;. Ahora Dios ha actuado de nuevo enviando a Jes&uacute;s. El testimonio de Esteban termin&oacute; se&ntilde;alando que los l&iacute;deres religiosos eran culpables de desobedecer a Dios traicionando y asesinando a Jes&uacute;s el Mes&iacute;as.</p>



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

			<td class="social" @click="share('lesson', 'La defensa de Esteban ante el Concilio: ', '/content/M2/spa/multiply3/multiply312.html')">
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