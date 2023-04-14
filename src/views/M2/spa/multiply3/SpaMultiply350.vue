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
                        <div class="chapter_number ltr"><h1>50.</h1></div>
                        <div class="chapter_title ltr"><h1>Pablo da testimonio al Rey Agripa</h1></div>
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
	<li class="back">Lea o vea <strong>Hechos 25:23-26:32</strong> dos veces mientras todos escuchan</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Lee Hechos 25:23-26:32</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>Pablo ante Agripa</h3>

<p><sup class="versenum">23&nbsp;</sup>Al d&iacute;a siguiente Agripa y Berenice se presentaron con gran pompa, y entraron en la sala de la audiencia acompa&ntilde;ados por oficiales de alto rango y por las personalidades m&aacute;s distinguidas de la ciudad. Festo mand&oacute; que le trajeran a Pablo,<sup class="versenum">24&nbsp;</sup>y dijo:</p>

<p>&mdash;Rey Agripa y todos los presentes: Aqu&iacute; tienen a este hombre. Todo el pueblo jud&iacute;o me ha presentado una demanda contra &eacute;l, tanto en Jerusal&eacute;n como aqu&iacute; en Cesarea, pidiendo a gritos su muerte.<sup class="versenum">25&nbsp;</sup>He llegado a la conclusi&oacute;n de que &eacute;l no ha hecho nada que merezca la muerte, pero, como apel&oacute; al emperador, he decidido enviarlo a Roma.<sup class="versenum">26&nbsp;</sup>El problema es que no tengo definido nada que escribir al soberano acerca de &eacute;l. Por eso lo he hecho comparecer ante ustedes, y especialmente delante de usted, rey Agripa, para que como resultado de esta investigaci&oacute;n tenga yo algunos datos para mi carta;<sup class="versenum">27&nbsp;</sup>me parece absurdo enviar un preso sin especificar los cargos contra &eacute;l.</p>

<p><sup class="versenum">1 </sup>Entonces Agripa le dijo a Pablo:</p>

<p>&mdash;Tienes permiso para defenderte.</p>

<p>Pablo hizo un adem&aacute;n con la mano y comenz&oacute; as&iacute; su defensa:</p>

<p><sup class="versenum">2&nbsp;</sup>&mdash;Rey Agripa, para m&iacute; es un privilegio presentarme hoy ante usted para defenderme de las acusaciones de los jud&iacute;os,<sup class="versenum">3&nbsp;</sup>sobre todo porque usted est&aacute; bien informado de todas las tradiciones y controversias de los jud&iacute;os. Por eso le ruego que me escuche con paciencia.</p>

<p><sup class="versenum">4&nbsp;</sup>&raquo;Todos los jud&iacute;os saben c&oacute;mo he vivido desde que era ni&ntilde;o, desde mi edad temprana entre mi gente y tambi&eacute;n en Jerusal&eacute;n.<sup class="versenum">5&nbsp;</sup>Ellos me conocen desde hace mucho tiempo y pueden atestiguar, si quieren, que viv&iacute; como fariseo, de acuerdo con la secta m&aacute;s estricta de nuestra religi&oacute;n.<sup class="versenum">6&nbsp;</sup>Y ahora me juzgan por la esperanza que tengo en la promesa que Dios hizo a nuestros antepasados.<sup class="versenum">7&nbsp;</sup>Esta es la promesa que nuestras doce tribus esperan alcanzar rindiendo culto a Dios con diligencia d&iacute;a y noche. Es por esta esperanza, oh rey, por lo que me acusan los jud&iacute;os.<sup class="versenum">8&nbsp;</sup>&iquest;Por qu&eacute; les parece a ustedes incre&iacute;ble que Dios resucite a los muertos?</p>

<p><sup class="versenum">9&nbsp;</sup>&raquo;Pues bien, yo mismo estaba convencido de que deb&iacute;a hacer todo lo posible por combatir el nombre de Jes&uacute;s de Nazaret.<sup class="versenum">10&nbsp;</sup>Eso es precisamente lo que hice en Jerusal&eacute;n. Con la autoridad de los jefes de los sacerdotes met&iacute; en la c&aacute;rcel a muchos de los santos y, cuando los mataban, yo manifestaba mi aprobaci&oacute;n.<sup class="versenum">11&nbsp;</sup>Muchas veces anduve de sinagoga en sinagoga castig&aacute;ndolos para obligarlos a blasfemar. Mi obsesi&oacute;n contra ellos me llevaba al extremo de perseguirlos incluso en ciudades del extranjero.</p>

<p><sup class="versenum">12&nbsp;</sup>&raquo;En uno de esos viajes iba yo hacia Damasco con la autoridad y la comisi&oacute;n de los jefes de los sacerdotes.<sup class="versenum">13&nbsp;</sup>A eso del mediod&iacute;a, oh rey, mientras iba por el camino, vi una luz del cielo, m&aacute;s refulgente que el sol, que con su resplandor nos envolvi&oacute; a m&iacute; y a mis acompa&ntilde;antes.<sup class="versenum">14&nbsp;</sup>Todos ca&iacute;mos al suelo, y yo o&iacute; una voz que me dec&iacute;a en arameo: &ldquo;Saulo, Saulo, &iquest;por qu&eacute; me persigues? &iquest;Qu&eacute; sacas con darte cabezazos contra la pared?&rdquo;<sup class="versenum">15&nbsp;</sup>Entonces pregunt&eacute;: &ldquo;&iquest;Qui&eacute;n eres, Se&ntilde;or?&rdquo; &ldquo;Yo soy Jes&uacute;s, a quien t&uacute; persigues &mdash;me contest&oacute; el Se&ntilde;or&mdash;.<sup class="versenum">16&nbsp;</sup>Ahora, ponte en pie y esc&uacute;chame. Me he aparecido a ti con el fin de designarte siervo y testigo de lo que has visto de m&iacute; y de lo que te voy a revelar.<sup class="versenum">17&nbsp;</sup>Te librar&eacute; de tu propio pueblo y de los gentiles. Te env&iacute;o a estos<sup class="versenum">18&nbsp;</sup>para que les abras los ojos y se conviertan de las tinieblas a la luz, y del poder de Satan&aacute;s a Dios, a fin de que, por la fe en m&iacute;, reciban el perd&oacute;n de los pecados y la herencia entre los santificados&rdquo;.</p>

<p><sup class="versenum">19&nbsp;</sup>&raquo;As&iacute; que, rey Agripa, no fui desobediente a esa visi&oacute;n celestial.<sup class="versenum">20&nbsp;</sup>Al contrario, comenzando con los que estaban en Damasco, siguiendo con los que estaban en Jerusal&eacute;n y en toda Judea, y luego con los gentiles, a todos les prediqu&eacute; que se arrepintieran y se convirtieran a Dios, y que demostraran su arrepentimiento con sus buenas obras.<sup class="versenum">21&nbsp;</sup>Solo por eso los jud&iacute;os me prendieron en el templo y trataron de matarme.<sup class="versenum">22&nbsp;</sup>Pero Dios me ha ayudado hasta hoy, y as&iacute; me mantengo firme, testificando a grandes y peque&ntilde;os. No he dicho sino lo que los profetas y Mois&eacute;s ya dijeron que suceder&iacute;a:<sup class="versenum">23&nbsp;</sup>que el Cristo padecer&iacute;a y que, siendo el primero en resucitar, proclamar&iacute;a la luz a su propio pueblo y a los gentiles&raquo;.</p>

<p><sup class="versenum">24&nbsp;</sup>Al llegar Pablo a este punto de su defensa, Festo interrumpi&oacute;.</p>

<p>&mdash;&iexcl;Est&aacute;s loco, Pablo! &mdash;le grit&oacute;&mdash;. El mucho estudio te ha hecho perder la cabeza.</p>

<p><sup class="versenum">25&nbsp;</sup>&mdash;No estoy loco, excelent&iacute;simo Festo &mdash;contest&oacute; Pablo&mdash;. Lo que digo es cierto y sensato.<sup class="versenum">26&nbsp;</sup>El rey est&aacute; familiarizado con estas cosas, y por eso hablo ante &eacute;l con tanto atrevimiento. Estoy convencido de que nada de esto ignora, porque no sucedi&oacute; en un rinc&oacute;n.<sup class="versenum">27&nbsp;</sup>Rey Agripa, &iquest;cree usted en los profetas? &iexcl;A m&iacute; me consta que s&iacute;!</p>

<p><sup class="versenum">28&nbsp;</sup>&mdash;Un poco m&aacute;s y me convences de hacerme cristiano &mdash;le dijo Agripa.</p>

<p><sup class="versenum">29&nbsp;</sup>&mdash;Sea por poco o por mucho &mdash;le replic&oacute; Pablo&mdash;, le pido a Dios que no solo usted, sino tambi&eacute;n todos los que me est&aacute;n escuchando hoy lleguen a ser como yo, aunque sin estas cadenas.</p>

<p><sup class="versenum">30&nbsp;</sup>Se levant&oacute; el rey, y tambi&eacute;n el gobernador, Berenice y los que estaban sentados con ellos.<sup class="versenum">31&nbsp;</sup>Al retirarse, dec&iacute;an entre s&iacute;:</p>

<p>&mdash;Este hombre no ha hecho nada que merezca la muerte ni la c&aacute;rcel.</p>

<p><sup class="versenum">32&nbsp;</sup>Y Agripa le dijo a Festo:</p>

<p>&mdash;Se podr&iacute;a poner en libertad a este hombre si no hubiera apelado al emperador.</p>
<!-- end bible -->

<p class="bible"></p>

</div>


<button id="MC2/spa/video/multiply3/350.mp4" type="button" class="external-movie">
         Mira &nbsp;Hechos 25:23-26:32&nbsp;</button>
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
<p class="up">Una vez m&aacute;s Pablo comparte su testimonio. Esta es la versi&oacute;n m&aacute;s larga registrada. Pablo est&aacute; hablando ante el Rey provincial jud&iacute;o Agripa y el Gobernador Festo. Pablo ya es considerado no culpable por el Gobernador que busc&oacute; claridad de qu&eacute; decirle a C&eacute;sar. Lee 1 Timoteo 1:12-16. Pablo admiti&oacute; que &eacute;l era como sus acusadores antes de conocer a Jes&uacute;s. &Eacute;l cre&iacute;a firmemente que era la voluntad de Dios y era su deber detener violentamente el mensaje de Jes&uacute;s. Aparentemente, Pablo hab&iacute;a estado resistiendo las impresiones de aceptar el Evangelio durante este per&iacute;odo de su vida. (Hechos 26:14) Jes&uacute;s inici&oacute; con este Asesino Saulo y lo hizo Su siervo para que el mundo no jud&iacute;o tuviera acceso al Evangelio. Se nos recuerda lo estrechamente identificado que Jes&uacute;s se identificaba con sus seguidores: perseguirlos era perseguirlo a &Eacute;l. Una vez m&aacute;s, Pablo obedeci&oacute; fielmente su llamado y desafi&oacute; audazmente a los l&iacute;deres pol&iacute;ticos a creer en Jes&uacute;s, pero ellos rechazaron la oferta.</p>

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

			<td class="social" @click="share('lesson', 'Pablo da testimonio al Rey Agripa: ', '/content/M2/spa/multiply3/multiply350.html')">
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