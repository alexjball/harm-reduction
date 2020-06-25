import { db } from './Firebase';

export const addIncident = async (incident) => {
    try {
        await db.collection('incidents').add({
          participantId: incident.participantId,
          firstName: incident.firstName,
          lastName: incident.lastName,
          pointOfContact: incident.pointOfContact,
          location: incident.location,
          dateOfRequest: incident.dateOfRequest,
          receivedNarcan: incident.receivedNarcan,
          notes: incident.notes,
        });
        return 'Submitted!';
      } catch (e) {
        return 'Error! ' + e ;
      }
}

export const getParticipantById = async participantId => {
    const participant = await db
      .collection('participants')
      .doc(participantId)
      .get();
    return {id: participant.id, ...participant.data()};
  };