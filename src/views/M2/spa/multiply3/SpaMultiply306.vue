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
                        <div class="chapter_number ltr"><h1>6.</h1></div>
                        <div class="chapter_title ltr"><h1>Jesús usa a Pedro y Juan para sanar a un mendigo lisiado</h1></div>
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
	<li class="back">Lea o vea <strong>Hechos 3:1-26</strong> dos veces mientras todos escuchan</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Lee Hechos 3</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>Pedro sana a un mendigo lisiado</h3>

<p><sup class="versenum">1 </sup>Un d&iacute;a sub&iacute;an Pedro y Juan al templo a las tres de la tarde, que es la hora de la oraci&oacute;n.<sup class="versenum">2&nbsp;</sup>Junto a la puerta llamada Hermosa hab&iacute;a un hombre lisiado de nacimiento, al que todos los d&iacute;as dejaban all&iacute; para que pidiera limosna a los que entraban en el templo.<sup class="versenum">3&nbsp;</sup>Cuando este vio que Pedro y Juan estaban por entrar, les pidi&oacute; limosna.<sup class="versenum">4&nbsp;</sup>Pedro, con Juan, mir&aacute;ndolo fijamente, le dijo:</p>

<p>&mdash;&iexcl;M&iacute;ranos!</p>

<p><sup class="versenum">5&nbsp;</sup>El hombre fij&oacute; en ellos la mirada, esperando recibir algo.</p>

<p><sup class="versenum">6&nbsp;</sup>&mdash;No tengo plata ni oro &mdash;declar&oacute; Pedro&mdash;, pero lo que tengo te doy. En el nombre de Jesucristo de Nazaret, &iexcl;lev&aacute;ntate y anda!</p>

<p><sup class="versenum">7&nbsp;</sup>Y tom&aacute;ndolo por la mano derecha, lo levant&oacute;. Al instante los pies y los tobillos del hombre cobraron fuerza.<sup class="versenum">8&nbsp;</sup>De un salto se puso en pie y comenz&oacute; a caminar. Luego entr&oacute; con ellos en el templo con sus propios pies, saltando y alabando a Dios.<sup class="versenum">9&nbsp;</sup>Cuando todo el pueblo lo vio caminar y alabar a Dios,<sup class="versenum">10&nbsp;</sup>lo reconocieron como el mismo hombre que acostumbraba pedir limosna sentado junto a la puerta llamada Hermosa, y se llenaron de admiraci&oacute;n y asombro por lo que le hab&iacute;a ocurrido.</p>

<h3>Pedro se dirige a los espectadores</h3>

<p><sup class="versenum">11&nbsp;</sup>Mientras el hombre segu&iacute;a aferrado a Pedro y a Juan, toda la gente, que no sal&iacute;a de su asombro, corri&oacute; hacia ellos al lugar conocido como P&oacute;rtico de Salom&oacute;n.<sup class="versenum">12&nbsp;</sup>Al ver esto, Pedro les dijo: &laquo;Pueblo de Israel, &iquest;por qu&eacute; les sorprende lo que ha pasado? &iquest;Por qu&eacute; nos miran como si, por nuestro propio poder o virtud, hubi&eacute;ramos hecho caminar a este hombre?<sup class="versenum">13&nbsp;</sup>El Dios de Abraham, de Isaac y de Jacob, el Dios de nuestros antepasados, ha glorificado a su siervo Jes&uacute;s. Ustedes lo entregaron y lo rechazaron ante Pilato, aunque este hab&iacute;a decidido soltarlo.<sup class="versenum">14&nbsp;</sup>Rechazaron al Santo y Justo, y pidieron que se indultara a un asesino.<sup class="versenum">15&nbsp;</sup>Mataron al autor de la vida, pero Dios lo levant&oacute; de entre los muertos, y de eso nosotros somos testigos.<sup class="versenum">16&nbsp;</sup>Por la fe en el nombre de Jes&uacute;s, &eacute;l ha restablecido a este hombre a quien ustedes ven y conocen. Esta fe que viene por medio de Jes&uacute;s lo ha sanado por completo, como les consta a ustedes.</p>

<p><sup class="versenum">17&nbsp;</sup>&raquo;Ahora bien, hermanos, yo s&eacute; que ustedes y sus dirigentes actuaron as&iacute; por ignorancia.<sup class="versenum">18&nbsp;</sup>Pero de este modo Dios cumpli&oacute; lo que de antemano hab&iacute;a anunciado por medio de todos los profetas: que su Mes&iacute;as ten&iacute;a que padecer.<sup class="versenum">19&nbsp;</sup>Por tanto, para que sean borrados sus pecados, arrepi&eacute;ntanse y vu&eacute;lvanse a Dios, a fin de que vengan tiempos de descanso de parte del Se&ntilde;or,<sup class="versenum">20&nbsp;</sup>envi&aacute;ndoles el Mes&iacute;as que ya hab&iacute;a sido preparado para ustedes, el cual es Jes&uacute;s.<sup class="versenum">21&nbsp;</sup>Es necesario que &eacute;l permanezca en el cielo hasta que llegue el tiempo de la restauraci&oacute;n de todas las cosas, como Dios lo ha anunciado desde hace siglos por medio de sus santos profetas.<sup class="versenum">22&nbsp;</sup>Mois&eacute;s dijo: &ldquo;El Se&ntilde;or su Dios har&aacute; surgir para ustedes, de entre sus propios hermanos, a un profeta como yo; presten atenci&oacute;n a todo lo que les diga.<sup class="versenum">23&nbsp;</sup>Porque quien no le haga caso ser&aacute; eliminado del pueblo&rdquo;.</p>

<p><sup class="versenum">24&nbsp;</sup>&raquo;En efecto, a partir de Samuel todos los profetas han anunciado estos d&iacute;as.<sup class="versenum">25&nbsp;</sup>Ustedes, pues, son herederos de los profetas y del pacto que Dios estableci&oacute; con nuestros antepasados al decirle a Abraham: &ldquo;Todos los pueblos del mundo ser&aacute;n bendecidos por medio de tu descendencia&rdquo;.<sup class="versenum">26&nbsp;</sup>Cuando Dios resucit&oacute; a su siervo, lo envi&oacute; primero a ustedes para darles la bendici&oacute;n de que cada uno se convierta de sus maldades&raquo;.</p>
<!-- end bible -->

<p class="bible"></p>

</div>


<button id="MC2/spa/video/multiply3/306.mp4" type="button" class="external-movie">
         Mira Hechos 3</button>
    <div class="collapsed"></div>




<h2 class="up">&nbsp;</h2>

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
	<li class="nobreak-final-final">Este es el primer milagro que Jes&uacute;s hace despu&eacute;s de su ascensi&oacute;n. Los disc&iacute;pulos continuaban viviendo Su modelo de poder y dependencia del Esp&iacute;ritu Santo. Pedro y Juan estaban llevando a cabo su rutina normal cuando este evento tuvo lugar. Jes&uacute;s les hab&iacute;a ense&ntilde;ado a dar a quien se lo pidiera, (<span class="popup-link" @click = "popUp('pop3')"> Mateo 5:42</span>)&nbsp;

	<div class="popup invisible" id="pop3"><!-- begin bible -->
	<p><sup class="versenum">42&nbsp;</sup>Al que te pida, dale; y al que quiera tomar de ti prestado, no le vuelvas la espalda.</p>
	<!-- end bible --></div>
	y ya hab&iacute;an experimentado ser utilizados para sanar a otros durante sus viajes misioneros a corto plazo (<span class="popup-link" @click = "popUp('pop4')"> Mateo 10</span>).

	<div class="popup invisible" id="pop4"><!-- begin bible -->
	<div>
	<p><sup class="versenum">1 </sup>Reuni&oacute; a sus doce disc&iacute;pulos y les dio autoridad para expulsar a los esp&iacute;ritus malignos y sanar toda enfermedad y toda dolencia.</p>

	<p><sup class="versenum">2&nbsp;</sup>Estos son los nombres de los doce ap&oacute;stoles: primero Sim&oacute;n, llamado Pedro, y su hermano Andr&eacute;s; Jacobo y su hermano Juan, hijos de Zebedeo;<sup class="versenum">3&nbsp;</sup>Felipe y Bartolom&eacute;; Tom&aacute;s y Mateo, el recaudador de impuestos; Jacobo, hijo de Alfeo, y Tadeo;<sup class="versenum">4&nbsp;</sup>Sim&oacute;n el Zelote y Judas Iscariote, el que lo traicion&oacute;.</p>

	<p><sup class="versenum">5&nbsp;</sup>Jes&uacute;s envi&oacute; a estos doce con las siguientes instrucciones: &laquo;No vayan entre los gentiles ni entren en ning&uacute;n pueblo de los samaritanos.<sup class="versenum">6&nbsp;</sup>Vayan m&aacute;s bien a las ovejas descarriadas del pueblo de Israel.<sup class="versenum">7&nbsp;</sup>Dondequiera que vayan, prediquen este mensaje: &ldquo;El reino de los cielos est&aacute; cerca&rdquo;.<sup class="versenum">8&nbsp;</sup>Sanen a los enfermos, resuciten a los muertos, limpien de su enfermedad a los que tienen lepra, expulsen a los demonios. Lo que ustedes recibieron gratis, denlo gratuitamente.<sup class="versenum">9&nbsp;</sup>No lleven oro ni plata ni cobre en el cintur&oacute;n,<sup class="versenum">10&nbsp;</sup>ni bolsa para el camino, ni dos mudas de ropa, ni sandalias, ni bast&oacute;n; porque el trabajador merece que se le d&eacute; su sustento.</p>

	<p><sup class="versenum">11&nbsp;</sup>&raquo;En cualquier pueblo o aldea donde entren, busquen a alguien que merezca recibirlos, y qu&eacute;dense en su casa hasta que se vayan de ese lugar.<sup class="versenum">12&nbsp;</sup>Al entrar, digan: &ldquo;Paz a esta casa&rdquo;.<sup class="versenum">13&nbsp;</sup>Si el hogar se lo merece, que la paz de ustedes reine en &eacute;l; y, si no, que la paz se vaya con ustedes.<sup class="versenum">14&nbsp;</sup>Si alguno no los recibe bien ni escucha sus palabras, al salir de esa casa o de ese pueblo, sac&uacute;danse el polvo de los pies.<sup class="versenum">15&nbsp;</sup>Les aseguro que en el d&iacute;a del juicio el castigo para Sodoma y Gomorra ser&aacute; m&aacute;s tolerable que para ese pueblo.<sup class="versenum">16&nbsp;</sup>Los env&iacute;o como ovejas en medio de lobos. Por tanto, sean astutos como serpientes y sencillos como palomas.</p>

	<p><sup class="versenum">17&nbsp;</sup>&raquo;Tengan cuidado con la gente; los entregar&aacute;n a los tribunales y los azotar&aacute;n en las sinagogas.<sup class="versenum">18&nbsp;</sup>Por mi causa los llevar&aacute;n ante gobernadores y reyes para dar testimonio a ellos y a los gentiles.<sup class="versenum">19&nbsp;</sup>Pero, cuando los arresten, no se preocupen por lo que van a decir o c&oacute;mo van a decirlo. En ese momento se les dar&aacute; lo que han de decir,<sup class="versenum">20&nbsp;</sup>porque no ser&aacute;n ustedes los que hablen, sino que el Esp&iacute;ritu de su Padre hablar&aacute; por medio de ustedes.</p>

	<p><sup class="versenum">21&nbsp;</sup>&raquo;El hermano entregar&aacute; a la muerte al hermano, y el padre al hijo. Los hijos se rebelar&aacute;n contra sus padres y har&aacute;n que los maten.<sup class="versenum">22&nbsp;</sup>Por causa de mi nombre todo el mundo los odiar&aacute;, pero el que se mantenga firme hasta el fin ser&aacute; salvo.<sup class="versenum">23&nbsp;</sup>Cuando los persigan en una ciudad, huyan a otra. Les aseguro que no terminar&aacute;n de recorrer las ciudades de Israel antes de que venga el Hijo del hombre.</p>

	<p><sup class="versenum">24&nbsp;</sup>&raquo;El disc&iacute;pulo no es superior a su maestro, ni el siervo superior a su amo.<sup class="versenum">25&nbsp;</sup>Basta con que el disc&iacute;pulo sea como su maestro, y el siervo como su amo. Si al jefe de la casa lo han llamado Beelzeb&uacute;, &iexcl;cu&aacute;nto m&aacute;s a los de su familia!</p>

	<p><sup class="versenum">26&nbsp;</sup>&raquo;As&iacute; que no les tengan miedo; porque no hay nada encubierto que no llegue a revelarse, ni nada escondido que no llegue a conocerse.<sup class="versenum">27&nbsp;</sup>Lo que les digo en la oscuridad, d&iacute;ganlo ustedes a plena luz; lo que se les susurra al o&iacute;do, procl&aacute;menlo desde las azoteas.<sup class="versenum">28&nbsp;</sup>No teman a los que matan el cuerpo, pero no pueden matar el alma. Teman m&aacute;s bien al que puede destruir alma y cuerpo en el infierno.<sup class="versenum">29&nbsp;</sup>&iquest;No se venden dos gorriones por una monedita? Sin embargo, ni uno de ellos caer&aacute; a tierra sin que lo permita el Padre;<sup class="versenum">30&nbsp;</sup>y &eacute;l les tiene contados a ustedes aun los cabellos de la cabeza.<sup class="versenum">31&nbsp;</sup>As&iacute; que no tengan miedo; ustedes valen m&aacute;s que muchos gorriones.</p>

	<p><sup class="versenum">32&nbsp;</sup>&raquo;A cualquiera que me reconozca delante de los dem&aacute;s, yo tambi&eacute;n lo reconocer&eacute; delante de mi Padre que est&aacute; en el cielo.<sup class="versenum">33&nbsp;</sup>Pero a cualquiera que me desconozca delante de los dem&aacute;s, yo tambi&eacute;n lo desconocer&eacute; delante de mi Padre que est&aacute; en el cielo.</p>

	<p><sup class="versenum">34&nbsp;</sup>&raquo;No crean que he venido a traer paz a la tierra. No vine a traer paz, sino espada.<sup class="versenum">35&nbsp;</sup>Porque he venido a poner en conflicto</p>

	<p>&raquo;&ldquo;al hombre contra su padre,<br />
	&nbsp;&nbsp;&nbsp;&nbsp;a la hija contra su madre,<br />
	&nbsp;&nbsp;&nbsp;&nbsp;a la nuera contra su suegra;<br />
	<sup class="versenum">36&nbsp;</sup>los enemigos de cada cual<br />
	&nbsp;&nbsp;&nbsp;&nbsp;ser&aacute;n los de su propia familia&rdquo;.</p>
	</div>

	<p><sup class="versenum">37&nbsp;</sup>&raquo;El que quiere a su padre o a su madre m&aacute;s que a m&iacute; no es digno de m&iacute;; el que quiere a su hijo o a su hija m&aacute;s que a m&iacute; no es digno de m&iacute;;<sup class="versenum">38&nbsp;</sup>y el que no toma su cruz y me sigue no es digno de m&iacute;.<sup class="versenum">39&nbsp;</sup>El que se aferre a su propia vida, la perder&aacute;, y el que renuncie a su propia vida por mi causa, la encontrar&aacute;.</p>

	<p><sup class="versenum">40&nbsp;</sup>&raquo;Quien los recibe a ustedes me recibe a m&iacute;; y quien me recibe a m&iacute; recibe al que me envi&oacute;.<sup class="versenum">41&nbsp;</sup>Cualquiera que recibe a un profeta por tratarse de un profeta recibir&aacute; recompensa de profeta; y el que recibe a un justo por tratarse de un justo recibir&aacute; recompensa de justo.<sup class="versenum">42&nbsp;</sup>Y quien d&eacute; siquiera un vaso de agua fresca a uno de estos peque&ntilde;os por tratarse de uno de mis disc&iacute;pulos, les aseguro que no perder&aacute; su recompensa&raquo;.</p>
	<!-- end bible --></div>
	&nbsp;Pedro se apresur&oacute; a se&ntilde;alar que la curaci&oacute;n fue la obra del Jes&uacute;s resucitado, vivo y presente. Este milagro dio una oportunidad para que Pedro y Juan testificaran a todas las personas en los tribunales del templo. Necesitamos estar listos para obedecer la inspiraci&oacute;n del Esp&iacute;ritu Santo en cualquier circunstancia.</li>
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

			<td class="social" @click="share('lesson', 'Jesús usa a Pedro y Juan para sanar a un mendigo lisiado: ', '/content/M2/spa/multiply3/multiply306.html')">
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