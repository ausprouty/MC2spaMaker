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
                        <div class="chapter_number ltr"><h1>4.</h1></div>
                        <div class="chapter_title ltr"><h1>Pedro se dirige a la multitud</h1></div>
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
	<li class="back">Lea o vea <strong>Hechos 2:14-41</strong> dos veces mientras todos escuchan</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Lee Hechos 2:14-41</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<div>
<div>
<div>
<h3>Pedro se dirige a la multitud</h3>

<p><sup class="versenum">14&nbsp;</sup>Entonces Pedro, con los once, se puso de pie y dijo a voz en cuello: &laquo;Compatriotas jud&iacute;os y todos ustedes que est&aacute;n en Jerusal&eacute;n, d&eacute;jenme explicarles lo que sucede; presten atenci&oacute;n a lo que les voy a decir.<sup class="versenum">15&nbsp;</sup>Estos no est&aacute;n borrachos, como suponen ustedes. &iexcl;Apenas son las nueve de la ma&ntilde;ana!<sup class="versenum">16&nbsp;</sup>En realidad lo que pasa es lo que anunci&oacute; el profeta Joel:</p>

<p><sup class="versenum">17&nbsp;</sup>&raquo;&ldquo;Suceder&aacute; que en los &uacute;ltimos d&iacute;as &mdash;dice Dios&mdash;,<br />
&nbsp;&nbsp;&nbsp;&nbsp;derramar&eacute; mi Esp&iacute;ritu sobre todo el g&eacute;nero humano.<br />
Los hijos y las hijas de ustedes profetizar&aacute;n,<br />
&nbsp;&nbsp;&nbsp;&nbsp;tendr&aacute;n visiones los j&oacute;venes<br />
&nbsp;&nbsp;&nbsp;&nbsp;y sue&ntilde;os los ancianos.<br />
<sup class="versenum">18&nbsp;</sup>En esos d&iacute;as derramar&eacute; mi Esp&iacute;ritu<br />
&nbsp;&nbsp;&nbsp;&nbsp;aun sobre mis siervos y mis siervas,<br />
&nbsp;&nbsp;&nbsp;&nbsp;y profetizar&aacute;n.<br />
<sup class="versenum">19&nbsp;</sup>Arriba en el cielo y abajo en la tierra mostrar&eacute; prodigios:<br />
&nbsp;&nbsp;&nbsp;&nbsp;sangre, fuego y nubes de humo.<br />
<sup class="versenum">20&nbsp;</sup>El sol se convertir&aacute; en tinieblas<br />
&nbsp;&nbsp;&nbsp;&nbsp;y la luna en sangre<br />
antes que llegue el d&iacute;a del Se&ntilde;or,<br />
&nbsp;&nbsp;&nbsp;&nbsp;d&iacute;a grande y esplendoroso.<br />
<sup class="versenum">21&nbsp;</sup>Y todo el que invoque el nombre del Se&ntilde;or<br />
&nbsp;&nbsp;&nbsp;&nbsp;ser&aacute; salvo&rdquo;.</p>
</div>

<p><sup class="versenum">22&nbsp;</sup>&raquo;Pueblo de Israel, escuchen esto: Jes&uacute;s de Nazaret fue un hombre acreditado por Dios ante ustedes con milagros, se&ntilde;ales y prodigios, los cuales realiz&oacute; Dios entre ustedes por medio de &eacute;l, como bien lo saben.<sup class="versenum">23&nbsp;</sup>Este fue entregado seg&uacute;n el determinado prop&oacute;sito y el previo conocimiento de Dios; y, por medio de gente malvada, ustedes lo mataron, clav&aacute;ndolo en la cruz.<sup class="versenum">24&nbsp;</sup>Sin embargo, Dios lo resucit&oacute;, libr&aacute;ndolo de las angustias de la muerte, porque era imposible que la muerte lo mantuviera bajo su dominio.<sup class="versenum">25&nbsp;</sup>En efecto, David dijo de &eacute;l:</p>

<p>&raquo;&ldquo;Ve&iacute;a yo al Se&ntilde;or siempre delante de m&iacute;,<br />
&nbsp;&nbsp;&nbsp;&nbsp;porque &eacute;l est&aacute; a mi derecha<br />
&nbsp;&nbsp;&nbsp;&nbsp;para que no caiga.<br />
<sup class="versenum">26&nbsp;</sup>Por eso mi coraz&oacute;n se alegra, y canta con gozo mi lengua;<br />
&nbsp;&nbsp;&nbsp;&nbsp;mi cuerpo tambi&eacute;n vivir&aacute; en esperanza.<br />
<sup class="versenum">27&nbsp;</sup>No dejar&aacute;s que mi vida termine en el sepulcro;<br />
&nbsp;&nbsp;&nbsp;&nbsp;no permitir&aacute;s que tu santo sufra corrupci&oacute;n.<br />
<sup class="versenum">28&nbsp;</sup>Me has dado a conocer los caminos de la vida;<br />
&nbsp;&nbsp;&nbsp;&nbsp;me llenar&aacute;s de alegr&iacute;a en tu presencia&rdquo;.</p>
</div>

<p><sup class="versenum">29&nbsp;</sup>&raquo;Hermanos, perm&iacute;tanme hablarles con franqueza acerca del patriarca David, que muri&oacute; y fue sepultado, y cuyo sepulcro est&aacute; entre nosotros hasta el d&iacute;a de hoy.<sup class="versenum">30&nbsp;</sup>Era profeta y sab&iacute;a que Dios le hab&iacute;a prometido bajo juramento poner en el trono a uno de sus descendientes.<sup class="versenum">31&nbsp;</sup>Fue as&iacute; como previ&oacute; lo que iba a suceder. Refiri&eacute;ndose a la resurrecci&oacute;n del Mes&iacute;as, afirm&oacute; que Dios no dejar&iacute;a que su vida terminara en el sepulcro, ni que su fin fuera la corrupci&oacute;n.<sup class="versenum">32&nbsp;</sup>A este Jes&uacute;s, Dios lo resucit&oacute;, y de ello todos nosotros somos testigos.<sup class="versenum">33&nbsp;</sup>Exaltado por el poder de Dios, y habiendo recibido del Padre el Esp&iacute;ritu Santo prometido, ha derramado esto que ustedes ahora ven y oyen.<sup class="versenum">34&nbsp;</sup>David no subi&oacute; al cielo, y sin embargo declar&oacute;:</p>

<p>&raquo;&ldquo;Dijo el Se&ntilde;or a mi Se&ntilde;or:<br />
&nbsp;&nbsp;&nbsp;&nbsp;Si&eacute;ntate a mi derecha,<br />
<sup class="versenum">35&nbsp;</sup>hasta que ponga a tus enemigos<br />
&nbsp;&nbsp;&nbsp;&nbsp;por estrado de tus pies&rdquo;.</p>
</div>

<p><sup class="versenum">36&nbsp;</sup>&raquo;Por tanto, s&eacute;palo bien todo Israel que a este Jes&uacute;s, a quien ustedes crucificaron, Dios lo ha hecho Se&ntilde;or y Mes&iacute;as&raquo;.</p>

<p><sup class="versenum">37&nbsp;</sup>Cuando oyeron esto, todos se sintieron profundamente conmovidos y les dijeron a Pedro y a los otros ap&oacute;stoles:</p>

<p>&mdash;Hermanos, &iquest;qu&eacute; debemos hacer?</p>

<p><sup class="versenum">38&nbsp;</sup>&mdash;Arrepi&eacute;ntase y baut&iacute;cese cada uno de ustedes en el nombre de Jesucristo para perd&oacute;n de sus pecados &mdash;les contest&oacute; Pedro&mdash;, y recibir&aacute;n el don del Esp&iacute;ritu Santo.<sup class="versenum">39&nbsp;</sup>En efecto, la promesa es para ustedes, para sus hijos y para todos los extranjeros, es decir, para todos aquellos a quienes el Se&ntilde;or nuestro Dios quiera llamar.</p>

<p><sup class="versenum">40&nbsp;</sup>Y con muchas otras razones les exhortaba insistentemente:</p>

<p>&mdash;&iexcl;S&aacute;lvense de esta generaci&oacute;n perversa!</p>

<h3>La comunidad de los creyentes</h3>

<p><sup class="versenum">41&nbsp;</sup>As&iacute;, pues, los que recibieron su mensaje fueron bautizados, y aquel d&iacute;a se unieron a la iglesia unas tres mil personas.</p>
<!-- end bible -->

<p class="bible"></p>

</div>


<button id="MC2/spa/video/multiply3/304.mp4" type="button" class="external-movie">
         Mira &nbsp;Hechos 2:14-41&nbsp;</button>
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
	<li class="nobreak-final-final">Apenas unas semanas antes, Jes&uacute;s hab&iacute;a abierto las mentes de los disc&iacute;pulos para entender lo que las Escrituras dec&iacute;an acerca de &Eacute;l (<span class="popup-link" @click = "popUp('pop3')"> Lucas 24:44-49</span>).&nbsp;

	<div class="popup invisible" id="pop3"><!-- begin bible -->
	<p><sup class="versenum">44&nbsp;</sup>&mdash;Cuando todav&iacute;a estaba yo con ustedes, les dec&iacute;a que ten&iacute;a que cumplirse todo lo que est&aacute; escrito acerca de m&iacute; en la ley de Mois&eacute;s, en los profetas y en los salmos.</p>

	<p><sup class="versenum">45&nbsp;</sup>Entonces les abri&oacute; el entendimiento para que comprendieran las Escrituras.</p>

	<p><sup class="versenum">46&nbsp;</sup>&mdash;Esto es lo que est&aacute; escrito &mdash;les explic&oacute;&mdash;: que el Cristo padecer&aacute; y resucitar&aacute; al tercer d&iacute;a,<sup class="versenum">47&nbsp;</sup>y en su nombre se predicar&aacute;n el arrepentimiento y el perd&oacute;n de pecados a todas las naciones, comenzando por Jerusal&eacute;n.<sup class="versenum">48&nbsp;</sup>Ustedes son testigos de estas cosas.<sup class="versenum">49&nbsp;</sup>Ahora voy a enviarles lo que ha prometido mi Padre; pero ustedes qu&eacute;dense en la ciudad hasta que sean revestidos del poder de lo alto.</p>
	<!-- end bible --></div>
	Ahora, a trav&eacute;s del Esp&iacute;ritu, Pedro pudo usar las Escrituras para interpretar los acontecimientos recientes (<span class="popup-link" @click = "popUp('pop4')"> Joel 2:28-32</span>,&nbsp;

	<div class="popup invisible" id="pop4"><!-- begin bible -->
	<div>
	<p><sup class="versenum">28&nbsp;</sup>&raquo;Despu&eacute;s de esto,<br />
	&nbsp;&nbsp;&nbsp;&nbsp;derramar&eacute; mi Esp&iacute;ritu sobre todo el g&eacute;nero humano.<br />
	Los hijos y las hijas de ustedes profetizar&aacute;n,<br />
	&nbsp;&nbsp;&nbsp;&nbsp;tendr&aacute;n sue&ntilde;os los ancianos<br />
	&nbsp;&nbsp;&nbsp;&nbsp;y visiones los j&oacute;venes.<br />
	<sup class="versenum">29&nbsp;</sup>En esos d&iacute;as derramar&eacute; mi Esp&iacute;ritu<br />
	&nbsp;&nbsp;&nbsp;&nbsp;aun sobre los siervos y las siervas.<br />
	<sup class="versenum">30&nbsp;</sup>En el cielo y en la tierra mostrar&eacute; prodigios:<br />
	&nbsp;&nbsp;&nbsp;&nbsp;sangre, fuego y columnas de humo.<br />
	<sup class="versenum">31&nbsp;</sup>El sol se convertir&aacute; en tinieblas<br />
	&nbsp;&nbsp;&nbsp;&nbsp;y la luna en sangre<br />
	antes que llegue el d&iacute;a del <span class="divine-name small-caps">Se&ntilde;or,<br />
	&nbsp;&nbsp;&nbsp;&nbsp;d&iacute;a grande y terrible.<br />
	<sup class="versenum">32&nbsp;</sup>Y todo el que invoque el nombre del <span class="divine-name small-caps">Se&ntilde;or<br />
	&nbsp;&nbsp;&nbsp;&nbsp;escapar&aacute; con vida,<br />
	porque en el monte Si&oacute;n y en Jerusal&eacute;n<br />
	&nbsp;&nbsp;&nbsp;&nbsp;habr&aacute; escapatoria,<br />
	&nbsp;&nbsp;&nbsp;&nbsp;como lo ha dicho el <span class="divine-name small-caps">Se&ntilde;or.<br />
	Y entre los sobrevivientes<br />
	&nbsp;&nbsp;&nbsp;&nbsp;estar&aacute;n los llamados del <span class="divine-name small-caps">Se&ntilde;or.</span></span></span></span></p>
	</div>
	<!-- end bible --></div>
	&nbsp;<span class="popup-link" @click = "popUp('pop5')"> Salmo&nbsp;16:8-11</span>,&nbsp;

	<div class="popup invisible" id="pop5"><!-- begin bible -->
	<div>
	<div>
	<p><sup class="versenum">8&nbsp;</sup>Siempre tengo presente al <span class="divine-name small-caps">Se&ntilde;or;<br />
	&nbsp;&nbsp;&nbsp;&nbsp;con &eacute;l a mi derecha, nada me har&aacute; caer.</span></p>
	</div>

	<p><sup class="versenum">9&nbsp;</sup>Por eso mi coraz&oacute;n se alegra,<br />
	&nbsp;&nbsp;&nbsp;&nbsp;y se regocijan mis entra&ntilde;as;<br />
	&nbsp;&nbsp;&nbsp;&nbsp;todo mi ser se llena de confianza.<br />
	<sup class="versenum">10&nbsp;</sup>No dejar&aacute;s que mi vida termine en el sepulcro;<br />
	&nbsp;&nbsp;&nbsp;&nbsp;no permitir&aacute;s que sufra corrupci&oacute;n tu siervo fiel.<br />
	<sup class="versenum">11&nbsp;</sup>Me has dado a conocer la senda de la vida;<br />
	&nbsp;&nbsp;&nbsp;&nbsp;me llenar&aacute;s de alegr&iacute;a en tu presencia,<br />
	&nbsp;&nbsp;&nbsp;&nbsp;y de dicha eterna a tu derecha.</p>
	</div>
	<!-- end bible --></div>
	&nbsp;<span class="popup-link" @click = "popUp('pop6')"> Salmo&nbsp;110:1</span>).

	<div class="popup invisible" id="pop6"><!-- begin bible -->
	<div>
	<h4 class="psalm-title">Salmo de David.</h4>

	<p><sup class="versenum">1 </sup>As&iacute; dijo el <span class="divine-name small-caps">Se&ntilde;or a mi Se&ntilde;or:<br />
	&nbsp;&nbsp;&nbsp;&nbsp;&laquo;Si&eacute;ntate a mi derecha<br />
	hasta que ponga a tus enemigos<br />
	&nbsp;&nbsp;&nbsp;&nbsp;por estrado de tus pies&raquo;.</span></p>
	</div>
	<!-- end bible --></div>
	Los peregrinos jud&iacute;os de todas partes del mundo romano escucharon el mensaje evang&eacute;lico de la vida, el ministerio, la muerte, la resurrecci&oacute;n y la oferta de salvaci&oacute;n de Jes&uacute;s de los pecados. Pedro suplic&oacute; a la multitud que se arrepintiera de actitudes y comportamientos equivocados, y que se identificara con Jes&uacute;s al ser bautizado en Su nombre. Le dijo a la multitud que el mensaje del Evangelio no era s&oacute;lo para ellos, sino tambi&eacute;n para sus amigos, familiares y todos los dem&aacute;s. El mensaje del Evangelio ofrece dos dones gratuitos: el perd&oacute;n de los pecados, que restaura nuestra relaci&oacute;n con Dios, y el Esp&iacute;ritu Santo, que es la presencia residente de Dios. La comunidad de disc&iacute;pulos experiment&oacute; un crecimiento explosivo de aproximadamente 120 a 3,000 en un d&iacute;a. Jes&uacute;s ya est&aacute; ayudando a asegurar el &eacute;xito de la Gran Comisi&oacute;n al salvar a personas de todas partes del mundo romano.</li>
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

			<td class="social" @click="share('lesson', 'Pedro se dirige a la multitud: ', '/content/M2/spa/multiply3/multiply304.html')">
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