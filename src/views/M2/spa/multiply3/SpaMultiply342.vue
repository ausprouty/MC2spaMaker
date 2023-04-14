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
                        <div class="chapter_number ltr"><h1>42.</h1></div>
                        <div class="chapter_title ltr"><h1>Instrucciones finales para los ancianos en Efesios</h1></div>
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
	<li class="back">Lea o vea <strong>Hechos 20:13-38</strong> dos veces mientras todos escuchan</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Lee Hechos 20:13-38</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>Pablo se despide de los ancianos de &Eacute;feso</h3>

<p><sup class="versenum">13&nbsp;</sup>Nosotros, por nuestra parte, nos embarcamos anticipadamente y zarpamos para As&oacute;n, donde &iacute;bamos a recoger a Pablo. As&iacute; se hab&iacute;a planeado, ya que &eacute;l iba a hacer esa parte del viaje por tierra.<sup class="versenum">14&nbsp;</sup>Cuando se encontr&oacute; con nosotros en As&oacute;n, lo tomamos a bordo y fuimos a Mitilene.<sup class="versenum">15&nbsp;</sup>Desde all&iacute; zarpamos al d&iacute;a siguiente y llegamos frente a Qu&iacute;o. Al otro d&iacute;a cruzamos en direcci&oacute;n a Samos, y un d&iacute;a despu&eacute;s llegamos a Mileto.<sup class="versenum">16&nbsp;</sup>Pablo hab&iacute;a decidido pasar de largo a &Eacute;feso para no demorarse en la provincia de Asia, porque ten&iacute;a prisa por llegar a Jerusal&eacute;n para el d&iacute;a de Pentecost&eacute;s, si fuera posible.</p>

<p><sup class="versenum">17&nbsp;</sup>Desde Mileto, Pablo mand&oacute; llamar a los ancianos de la iglesia de &Eacute;feso.<sup class="versenum">18&nbsp;</sup>Cuando llegaron, les dijo: &laquo;Ustedes saben c&oacute;mo me port&eacute; todo el tiempo que estuve con ustedes, desde el primer d&iacute;a que vine a la provincia de Asia.<sup class="versenum">19&nbsp;</sup>He servido al Se&ntilde;or con toda humildad y con l&aacute;grimas, a pesar de haber sido sometido a duras pruebas por las maquinaciones de los jud&iacute;os.<sup class="versenum">20&nbsp;</sup>Ustedes saben que no he vacilado en predicarles todo lo que les fuera de provecho, sino que les he ense&ntilde;ado p&uacute;blicamente y en las casas.<sup class="versenum">21&nbsp;</sup>A jud&iacute;os y a griegos les he instado a convertirse a Dios y a creer en nuestro Se&ntilde;or Jes&uacute;s.</p>

<p><sup class="versenum">22&nbsp;</sup>&raquo;Y ahora tengan en cuenta que voy a Jerusal&eacute;n obligado por el Esp&iacute;ritu, sin saber lo que all&iacute; me espera.<sup class="versenum">23&nbsp;</sup>Lo &uacute;nico que s&eacute; es que en todas las ciudades el Esp&iacute;ritu Santo me asegura que me esperan prisiones y sufrimientos.<sup class="versenum">24&nbsp;</sup>Sin embargo, considero que mi vida carece de valor para m&iacute; mismo, con tal de que termine mi carrera y lleve a cabo el servicio que me ha encomendado el Se&ntilde;or Jes&uacute;s, que es el de dar testimonio del evangelio de la gracia de Dios.</p>

<p><sup class="versenum">25&nbsp;</sup>&raquo;Escuchen, yo s&eacute; que ninguno de ustedes, entre quienes he andado predicando el reino de Dios, volver&aacute; a verme.<sup class="versenum">26&nbsp;</sup>Por tanto, hoy les declaro que soy inocente de la sangre de todos,<sup class="versenum">27&nbsp;</sup>porque sin vacilar les he proclamado todo el prop&oacute;sito de Dios.<sup class="versenum">28&nbsp;</sup>Tengan cuidado de s&iacute; mismos y de todo el reba&ntilde;o sobre el cual el Esp&iacute;ritu Santo los ha puesto como obispos para pastorear la iglesia de Dios, que &eacute;l adquiri&oacute; con su propia sangre.<sup class="versenum">29&nbsp;</sup>S&eacute; que despu&eacute;s de mi partida entrar&aacute;n en medio de ustedes lobos feroces que procurar&aacute;n acabar con el reba&ntilde;o.<sup class="versenum">30&nbsp;</sup>Aun de entre ustedes mismos se levantar&aacute;n algunos que ense&ntilde;ar&aacute;n falsedades para arrastrar a los disc&iacute;pulos que los sigan.<sup class="versenum">31&nbsp;</sup>As&iacute; que est&eacute;n alerta. Recuerden que d&iacute;a y noche, durante tres a&ntilde;os, no he dejado de amonestar con l&aacute;grimas a cada uno en particular.</p>

<p><sup class="versenum">32&nbsp;</sup>&raquo;Ahora los encomiendo a Dios y al mensaje de su gracia, mensaje que tiene poder para edificarlos y darles herencia entre todos los santificados.<sup class="versenum">33&nbsp;</sup>No he codiciado ni la plata ni el oro ni la ropa de nadie.<sup class="versenum">34&nbsp;</sup>Ustedes mismos saben bien que estas manos se han ocupado de mis propias necesidades y de las de mis compa&ntilde;eros.<sup class="versenum">35&nbsp;</sup>Con mi ejemplo les he mostrado que es preciso trabajar duro para ayudar a los necesitados, recordando las palabras del Se&ntilde;or Jes&uacute;s: &ldquo;Hay m&aacute;s dicha en dar que en recibir&rdquo;&raquo;.</p>

<p><sup class="versenum">36&nbsp;</sup>Despu&eacute;s de decir esto, Pablo se puso de rodillas con todos ellos y or&oacute;.<sup class="versenum">37&nbsp;</sup>Todos lloraban inconsolablemente mientras lo abrazaban y lo besaban.<sup class="versenum">38&nbsp;</sup>Lo que m&aacute;s los entristec&iacute;a era su declaraci&oacute;n de que ellos no volver&iacute;an a verlo. Luego lo acompa&ntilde;aron hasta el barco.</p>
<!-- end bible -->

<p class="bible"></p>

</div>


<button id="MC2/spa/video/multiply3/342.mp4" type="button" class="external-movie">
         Mira &nbsp;Hechos 20:13-38&nbsp;</button>
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
<p class="up">En su camino a Jerusal&eacute;n, Pablo y el equipo del ministerio se detuvieron en Mileto. Pablo llam&oacute; a los ancianos en Efesios a venir para que pudiera hablarles por &uacute;ltima vez. De las experiencias de Pablo aprendemos mucho acerca de la perseverancia que se necesita para plantar iglesias en ciudades no cristianas. Pablo enfrent&oacute; muchas pruebas y dificultades, pero a&uacute;n as&iacute; les dijo a los efesios la verdad. No cambi&oacute; su mensaje para complacer a la gente. Pablo tambi&eacute;n model&oacute; la entrega completa a la voluntad del Se&ntilde;or, incluso en medio del sufrimiento. Tambi&eacute;n aprendemos mucho sobre el importante papel que tienen los ancianos. Deben guardar sus vidas y ser un modelo de c&oacute;mo caminar con Jes&uacute;s. Tambi&eacute;n deben proteger al pueblo de Dios y alimentarlo ense&ntilde;ando la Palabra. Jes&uacute;s ense&ntilde;&oacute; que la naturaleza del Reino de Dios siempre incluir&iacute;a la presencia del mal (Mateo 13:24-30). Pablo sab&iacute;a que enfrentar&iacute;an los peligros de los falsos maestros cuyo deseo era destruir a los creyentes. Este per&iacute;odo termina con Pablo afirmando que su trabajo fue hecho en la parte oriental del Imperio Romano (Romano 15:19).</p>

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

			<td class="social" @click="share('lesson', 'Instrucciones finales para los ancianos en Efesios: ', '/content/M2/spa/multiply3/multiply342.html')">
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