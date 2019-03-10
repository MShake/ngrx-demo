import * as fromTickets from './tickets.action';

describe('Tickets Actions', () => {
  describe('LoadTickets Actions', () => {
    describe('LoadTickets', () => {
      it('should create an action', () => {
        const action = new fromTickets.LoadTickets();

        expect({ ...action }).toEqual({
          type: fromTickets.LOAD_TICKETS
        });
      });
    });

    describe('LoadTicketsFail', () => {
      it('should create an action', () => {
        const payload = { message: 'Load Error' };
        const action = new fromTickets.LoadTicketsFail(payload);

        expect({ ...action }).toEqual({
          type: fromTickets.LOAD_TICKETS_FAIL,
          payload
        });
      });
    });

    describe('LoadTicketsSuccess', () => {
      it('should create an action', () => {
        const payload = [
          {
            id: 1,
            title: 'Faire du DDD',
            description: 'Apprendre à mettre en place DDD dans un projet',
            assignedUser: 676554
          },
          {
            id: 22,
            title: 'Apprendre @NgRx',
            description: 'Apprendre à mettre en place NgRx dans un projet',
            assignedUser: 875408
          },
          {
            id: 3,
            title: 'Mettre en place un serveur GraphQL',
            description:
              'Apprendre à mettre en place un serveur GraphQl avec Apollo',
            assignedUser: 176422
          }
        ];
        const action = new fromTickets.LoadTicketsSuccess(payload);

        expect({ ...action }).toEqual({
          type: fromTickets.LOAD_TICKETS_SUCCESS,
          payload
        });
      });
    });
  });
});
