import createService from "./service";

let notificationService = null;

export default function service() {
  if (!notificationService) {
    notificationService = createService();
  }

  return notificationService;
}
