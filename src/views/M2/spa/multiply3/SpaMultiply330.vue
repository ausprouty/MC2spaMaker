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
                        <div class="chapter_number ltr"><h1>30.</h1></div>
                        <div class="chapter_title ltr"><h1>Los líderes disciernen la voluntad de Dios para la expansión de los gentiles</h1></div>
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
	<li class="back">Lea o vea <strong>Hechos 15:1-35</strong> dos veces mientras todos escuchan</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Lee Hechos 15:1-35</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<div>
<h3>El concilio de Jerusal&eacute;n</h3>

<p><sup class="versenum">1 </sup>Algunos que hab&iacute;an llegado de Judea a Antioqu&iacute;a se pusieron a ense&ntilde;ar a los hermanos: &laquo;A menos que ustedes se circunciden, conforme a la tradici&oacute;n de Mois&eacute;s, no pueden ser salvos&raquo;.<sup class="versenum">2&nbsp;</sup>Esto provoc&oacute; un altercado y un serio debate de Pablo y Bernab&eacute; con ellos. Entonces se decidi&oacute; que Pablo y Bernab&eacute;, y algunos otros creyentes, subieran a Jerusal&eacute;n para tratar este asunto con los ap&oacute;stoles y los ancianos.<sup class="versenum">3&nbsp;</sup>Enviados por la iglesia, al pasar por Fenicia y Samaria contaron c&oacute;mo se hab&iacute;an convertido los gentiles. Estas noticias llenaron de alegr&iacute;a a todos los creyentes.<sup class="versenum">4&nbsp;</sup>Al llegar a Jerusal&eacute;n, fueron muy bien recibidos tanto por la iglesia como por los ap&oacute;stoles y los ancianos, a quienes informaron de todo lo que Dios hab&iacute;a hecho por medio de ellos.</p>

<p><sup class="versenum">5&nbsp;</sup>Entonces intervinieron algunos creyentes que pertenec&iacute;an a la secta de los fariseos y afirmaron:</p>

<p>&mdash;Es necesario circuncidar a los gentiles y exigirles que obedezcan la ley de Mois&eacute;s.</p>

<p><sup class="versenum">6&nbsp;</sup>Los ap&oacute;stoles y los ancianos se reunieron para examinar este asunto.<sup class="versenum">7&nbsp;</sup>Despu&eacute;s de una larga discusi&oacute;n, Pedro tom&oacute; la palabra:</p>

<p>&mdash;Hermanos, ustedes saben que desde un principio Dios me escogi&oacute; de entre ustedes para que por mi boca los gentiles oyeran el mensaje del evangelio y creyeran.<sup class="versenum">8&nbsp;</sup>Dios, que conoce el coraz&oacute;n humano, mostr&oacute; que los aceptaba d&aacute;ndoles el Esp&iacute;ritu Santo, lo mismo que a nosotros.<sup class="versenum">9&nbsp;</sup>Sin hacer distinci&oacute;n alguna entre nosotros y ellos, purific&oacute; sus corazones por la fe.<sup class="versenum">10&nbsp;</sup>Entonces, &iquest;por qu&eacute; tratan ahora de provocar a Dios poniendo sobre el cuello de esos disc&iacute;pulos un yugo que ni nosotros ni nuestros antepasados hemos podido soportar?<sup class="versenum">11&nbsp;</sup>&iexcl;No puede ser! M&aacute;s bien, como ellos, creemos que somos salvos por la gracia de nuestro Se&ntilde;or Jes&uacute;s.</p>

<p><sup class="versenum">12&nbsp;</sup>Toda la asamblea guard&oacute; silencio para escuchar a Bernab&eacute; y a Pablo, que les contaron las se&ntilde;ales y prodigios que Dios hab&iacute;a hecho por medio de ellos entre los gentiles.<sup class="versenum">13&nbsp;</sup>Cuando terminaron, Jacobo tom&oacute; la palabra y dijo:</p>

<p>&mdash;Hermanos, esc&uacute;chenme.<sup class="versenum">14&nbsp;</sup>Sim&oacute;n nos ha expuesto c&oacute;mo Dios desde el principio tuvo a bien escoger de entre los gentiles un pueblo para honra de su nombre.<sup class="versenum">15&nbsp;</sup>Con esto concuerdan las palabras de los profetas, tal como est&aacute; escrito:</p>

<p><sup class="versenum">16&nbsp;</sup>&raquo;&ldquo;Despu&eacute;s de esto volver&eacute;<br />
&nbsp;&nbsp;&nbsp;&nbsp;y reedificar&eacute; la choza ca&iacute;da de David.<br />
Reedificar&eacute; sus ruinas,<br />
&nbsp;&nbsp;&nbsp;&nbsp;y la restaurar&eacute;,<br />
<sup class="versenum">17&nbsp;</sup>para que busque al Se&ntilde;or el resto de la humanidad,<br />
&nbsp;&nbsp;&nbsp;&nbsp;todas las naciones que llevan mi nombre.<br />
<sup class="versenum">18&nbsp;</sup>As&iacute; dice el Se&ntilde;or, que hace estas cosas&rdquo;<br />
&nbsp;&nbsp;&nbsp;&nbsp;conocidas desde tiempos antiguos.</p>
</div>

<p><sup class="versenum">19&nbsp;</sup>&raquo;Por lo tanto, yo considero que debemos dejar de ponerles trabas a los gentiles que se convierten a Dios.<sup class="versenum">20&nbsp;</sup>M&aacute;s bien debemos escribirles que se abstengan de lo contaminado por los &iacute;dolos, de la inmoralidad sexual, de la carne de animales estrangulados y de sangre.<sup class="versenum">21&nbsp;</sup>En efecto, desde tiempos antiguos Mois&eacute;s siempre ha tenido en cada ciudad quien lo predique y lo lea en las sinagogas todos los s&aacute;bados&raquo;.</p>

<h3>Carta del concilio a los creyentes gentiles</h3>

<p><sup class="versenum">22&nbsp;</sup>Entonces los ap&oacute;stoles y los ancianos, de com&uacute;n acuerdo con toda la iglesia, decidieron escoger a algunos de ellos y enviarlos a Antioqu&iacute;a con Pablo y Bernab&eacute;. Escogieron a Judas, llamado Barsab&aacute;s, y a Silas, que ten&iacute;an buena reputaci&oacute;n entre los hermanos.<sup class="versenum">23&nbsp;</sup>Con ellos mandaron la siguiente carta:</p>

<p>Los ap&oacute;stoles y los ancianos,</p>

<p>a nuestros hermanos gentiles en Antioqu&iacute;a, Siria y Cilicia:</p>

<p>Saludos.</p>

<p><sup class="versenum">24&nbsp;</sup>Nos hemos enterado de que algunos de los nuestros, sin nuestra autorizaci&oacute;n, los han inquietado a ustedes, alarm&aacute;ndoles con lo que les han dicho.<sup class="versenum">25&nbsp;</sup>As&iacute; que de com&uacute;n acuerdo hemos decidido escoger a algunos hombres y enviarlos a ustedes con nuestros queridos hermanos Pablo y Bernab&eacute;,<sup class="versenum">26&nbsp;</sup>quienes han arriesgado su vida por el nombre de nuestro Se&ntilde;or Jesucristo.<sup class="versenum">27&nbsp;</sup>Por tanto, les enviamos a Judas y a Silas para que les confirmen personalmente lo que les escribimos.<sup class="versenum">28&nbsp;</sup>Nos pareci&oacute; bien al Esp&iacute;ritu Santo y a nosotros no imponerles a ustedes ninguna carga aparte de los siguientes requisitos:<sup class="versenum">29&nbsp;</sup>abstenerse de lo sacrificado a los &iacute;dolos, de sangre, de la carne de animales estrangulados y de la inmoralidad sexual. Bien har&aacute;n ustedes si evitan estas cosas.</p>

<p>Con nuestros mejores deseos.</p>

<p><sup class="versenum">30&nbsp;</sup>Una vez despedidos, ellos bajaron a Antioqu&iacute;a, donde reunieron a la congregaci&oacute;n y entregaron la carta.<sup class="versenum">31&nbsp;</sup>Los creyentes la leyeron y se alegraron por su mensaje alentador.<sup class="versenum">32&nbsp;</sup>Judas y Silas, que tambi&eacute;n eran profetas, hablaron extensamente para animarlos y fortalecerlos.<sup class="versenum">33&nbsp;</sup>Despu&eacute;s de pasar alg&uacute;n tiempo all&iacute;, los hermanos los despidieron en paz, para que regresaran a quienes los hab&iacute;an enviado.<sup class="versenum">35&nbsp;</sup>Pablo y Bernab&eacute; permanecieron en Antioqu&iacute;a, ense&ntilde;ando y anunciando la palabra del Se&ntilde;or en compa&ntilde;&iacute;a de muchos otros.</p>
<!-- end bible -->

<p class="bible"></p>

</div>


<button id="MC2/spa/video/multiply3/330.mp4" type="button" class="external-movie">
         Mira Hechos 15:1-35</button>
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
<p class="up">Algunos de los creyentes jud&iacute;os insistieron en que sin circuncisi&oacute;n los nuevos conversos no podr&iacute;an ser salvos. La circuncisi&oacute;n era la se&ntilde;al dada por Dios de que los jud&iacute;os eran miembros del pacto del Antiguo Testamento. Aunque hab&iacute;an llegado a entender que la oferta de salvaci&oacute;n de Dios era para todos los pueblos (Hechos 11:18), todav&iacute;a cre&iacute;an que Dios requer&iacute;a la circuncisi&oacute;n y la observaci&oacute;n de la Ley como necesaria para ser plenamente aceptados en el cuerpo de Cristo. La pr&aacute;ctica del ministerio de Pablo de aceptar a los gentiles como miembros del cuerpo de Cristo por su profesi&oacute;n de fe y bautismo solamente estaba siendo desafiada. Pero vemos c&oacute;mo Pablo estaba dispuesto a someterse a la decisi&oacute;n del cuerpo de creyentes. &iexcl;El futuro de la misi&oacute;n de hacer disc&iacute;pulos de todas las naciones estaba en juego! Los l&iacute;deres usaron la oraci&oacute;n, la escucha y el razonamiento cuidadoso, la reflexi&oacute;n sobre la Palabra y la observaci&oacute;n de c&oacute;mo Dios estaba obrando para discernir la voluntad de Dios. Aclararon doctrina que puso fin a la controversia y promovi&oacute; la paz. Jes&uacute;s hab&iacute;a abierto el camino para que todos los pueblos regresaran al Padre.</p>

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

			<td class="social" @click="share('lesson', 'Los líderes disciernen la voluntad de Dios para la expansión de los gentiles: ', '/content/M2/spa/multiply3/multiply330.html')">
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