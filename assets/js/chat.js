    window.fcSettings = {
      token: "447ca4e4-dd30-412d-98f1-74c384a55be9",
      host: "https://wchat.freshchat.com",
      siteId: "SITE_ID", // OPTIONAL: id unique to your site
      externalId: "kasirrjmedlinxasia", // user’s id unique to your system
      firstName: "Kasir Medlinx", // user’s first name
      lastName: "Asia", // user’s last name
      email: "kasir.medlinx@asia.com", // user’s email address
      phone: "87878787", // phone number without country code
      phoneCountryCode: "+62" // phone’s country code
    };

    $('body').append(
      `
        <span class="tooltiptext" style="text-transform: uppercase">Chat di Sini</span>
      `
    )

    $('.tooltiptext').css({
      "text-align": "center",
      "max-width": "200px",
      "background-color": "#e51400",
      "color": "#fff",
      "border-radius": "6px",
      "padding": "5px 0",
      "position": "fixed",
      "bottom": "85px",
      "right": "20px",
      "padding": "5px 10px",
      "z-index": "0",
    })
    $('#fc_frame').css('right', '25px')
    $('#fc_frame').css('bottom', '25px')
    $('#fc_frame').css('z-index', '99999')